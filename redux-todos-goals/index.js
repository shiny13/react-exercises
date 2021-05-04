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
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

// Action creators
function addTodoAction (todo) {
    return {
        type: ADD_TODO,
        todo
    }
}
function removeTodoAction (id) {
    return {
        type: REMOVE_TODO,
        id
    }
}
function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}
function addGoalAction (goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}
function removeGoalAction (id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

// This is a reducer function as it takes in a state and action
// then returns a new state based on the action
// a reducer must be a pure function 
function todos (state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
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
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
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
/*const unsubscribe = store.subscribe(() => {
    console.log('The store changed.')
})*/

store.dispatch(addTodoAction({
        id: 1,
        name: 'Learn redux',
        complete: false
    }))
store.dispatch(addTodoAction({
        id: 2,
        name: 'Learn angular',
        complete: false
    }))
store.dispatch(addTodoAction({
        id: 3,
        name: 'walk my lion',
        complete: false
    }))
store.dispatch(removeTodoAction(2))
store.dispatch(toggleTodoAction(3))
store.dispatch(addGoalAction({
        id: 1,
        name: 'Learn about life',
    }))
store.dispatch(addGoalAction({
        id: 2,
        name: 'Lose 10KGs',
    }))
store.dispatch(removeGoalAction(2))