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

// App code 
// This is a reducer function as it takes in a state and action
// then returns a new state based on the action
// a reducer must be a pure function 
function todos (state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([action.todo])
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map((todo) => 
            todo.id !== action.id 
                ? todo 
                : Object.assign({}, todo, { complete: !todo.complete })
             )
        default: 
            return state 
    }
}

function goals (state = [], action) {
    switch(action.type) {
        case 'ADD_GOAL':
            return state.concat([action.goal])
        case 'REMOVE_GOAL':
            return state.filter((goal) => goal.id !== action.id)
        default: 
            return state 
    }
}

function app (state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    }
}

const store = createStore(app)
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})
const unsubscribe = store.subscribe(() => {
    console.log('The store changed.')
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 1,
        name: 'Learn redux',
        complete: false
    }
})
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 2,
        name: 'Learn angular',
        complete: false
    }
})
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 3,
        name: 'walk my lion',
        complete: false
    }
})
store.dispatch({
    type: 'REMOVE_TODO',
    todo: {
        id: 2,
        name: 'Learn angular',
        complete: false
    }
})
store.dispatch({
    type: 'TOGGLE_TODO',
    todo: {
        id: 2,
        name: 'walk my lion',
        complete: false
    }
})
store.dispatch({
    type: 'ADD_GOAL',
    goal: {
        id: 1,
        name: 'Learn about life',
        complete: false
    }
})
store.dispatch({
    type: 'ADD_GOAL',
    goal: {
        id: 2,
        name: 'Lose 10KGs',
        complete: false
    }
})
store.dispatch({
    type: 'REMOVE_GOAL',
    goal: {
        id: 2,
        name: 'Lose 10KGs',
        complete: false
    }
})