const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,

}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUB_COUNTER') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());

// Subscription (triggered when ever an action is dispatched)
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' }); // will trigger the subscription
store.dispatch({ type: 'ADD_COUNTER', value: 10 }); // will trigger the subscription
store.dispatch({ type: 'SUB_COUNTER', value: 5 }); // will trigger the subscription
console.log('store.getState() --->', store.getState());



// OUTPUT
// node redux-basics.js 

// store.getState() { counter: 0 }
// [Subscription] { counter: 1 }
// [Subscription] { counter: 11 }
// store.getState() ---> { counter: 11 }

// We get the two subscription outputs not because subscription comes before it getState, before
// this console log statement but because it's triggered when ever an action is dispatched,
