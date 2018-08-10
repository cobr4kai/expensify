import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, startAddExpense, setExpenses, startSetExpenses, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt }; 
    });   
    database.ref('expenses').set(expensesData).then(() => done());
});

test(`should setup remove expense action object`, () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    }); 
});

test(`should setup edit expense action object`, () => {
    const action = editExpense('123abc', { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    }); 
});

test(`should setup add expense action object with provided values`, () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',        
        expense: expenses[2]
    }); 
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData))    
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');        
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    store.dispatch(startAddExpense())    
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '', 
                amount: 0, 
                createdAt: 0
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');        
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0
        });
        done();
    });
});

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore();
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});  