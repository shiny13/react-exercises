function createStore(reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. Update the state

    let state 
    let listeners = []

    const getState = () => state 

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe, 
        dispatch
    }
}

const store = createStore() 
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})
const unsubscribe = store.subscribe(() => {
    console.log('The store changed.')
})

// App code 
// This is a reducer function as it takes in a state and action
// then returns a new state based on the action
// a reducer must be a pure function 
function todos (state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }

    return state 
}

const store = createStore(todos)
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn redux',
        complete: false
    }
})