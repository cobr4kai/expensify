import { createStore } from 'redux';

const add = ({a, b}) => {
    return a + b;
};

console.log(add({a: 1, b: 2, c: 3}));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ set = 101 } = {}) => ({
    type: 'SET',
    set
});

const resetCount = () => ({
    type: 'RESET'    
});


// Reducers
// Reducers are pure functions

const countReducer = ((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return { count: state.count + action.incrementBy }; 
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };     
        case 'SET':
            return { count: action.set };     
        case 'RESET': return { count: 0 };

        default: return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); 

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount()); 
store.dispatch(resetCount()); 
store.dispatch(decrementCount()); 
store.dispatch(decrementCount({ decrementBy: 10 })); 
store.dispatch(setCount());
store.dispatch(incrementCount()); 
