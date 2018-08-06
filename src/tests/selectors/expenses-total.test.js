import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';


test('should equal 0 if no expenses', () => {    
    const sum = selectExpensesTotal([]);
    expect(sum).toEqual(0);
});

test('should correctly add 1 expense', () => {    
    const sum = selectExpensesTotal([expenses[0]]);
    expect(sum).toEqual(expenses[0].amount);
});

test('should add sum of expenses', () => {    
    const sum = selectExpensesTotal(expenses);
    expect(sum).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
