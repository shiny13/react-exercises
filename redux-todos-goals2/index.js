function generateId () {
    return Math.random().toString(36).substring(2) + 
            (new Date()).getTime().toString(36);
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

// ES6 syntax 
const checker = (store) => (next) = (action) => {
    if (action.type === ADD_TODO &&
        action.todo.name.toLowerCase().includes('bitcoin')) {
        return alert('Bitcoin detected! Bad idea...')
    }
    if (action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().includes('bitcoin')) {
        return alert('Bitcoin detected! Bad idea...')
    }

    return next(action)
}

// function checker (store) {
//     return function(next) {
//         return function (action) {
//             if (action.type === ADD_TODO &&
//                 action.todo.name.toLowerCase().includes('bitcoin')) {
//                 return alert('Bitcoin detected! Bad idea...')
//             }
//             if (action.type === ADD_GOAL &&
//                 action.goal.name.toLowerCase().includes('bitcoin')) {
//                 return alert('Bitcoin detected! Bad idea...')
//             }
        
//             return next(action)
//         }
//     }
// }

const logger = (store) => (next) = (action) => {
    console.group(action.type)
        console.log('This action: ', action)
        const result = next(action)
        console.log('The new state: ', store.getState())
    console.groupEnd()
    return result
}

const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals
}), Redux.applyMiddleware(checker, logger))

store.subscribe(() => {
    console.log('The new state is: ', store.getState())
    const { goals, todos } = store.getState()

    document.getElementById('goals').innerHTML = ''
    document.getElementById('todos').innerHTML = ''

    goals.forEach(addGoalToDOM)
    todos.forEach(addTodoToDOM)
})
/*const unsubscribe = store.subscribe(() => {
    console.log('The store changed.')
})*/

// DOM code
function addTodo () {
    const input = document.getElementById('todo')
    const name = input.value
    input.value = ''

    store.dispatch(addTodoAction({
        name,
        complete: false,
        id: generateId()
    }))
}

function addGoal() {
    const input = document.getElementById('goal')
    const name = input.value
    input.value = ''

    store.dispatch(addGoalAction({
        id: generateId(),
        name
    }))
}

document.getElementById('todoBtn').addEventListener('click', addTodo)

document.getElementById('goalBtn').addEventListener('click', addGoal)

function createRemoveButton(onClick) {
    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'X' 
    removeBtn.addEventListener('click', onClick)
    return removeBtn
}

function addTodoToDOM(todo) {
    const node = document.createElement('li')
    const text = document.createTextNode(todo.name)

    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeTodoAction(todo.id))
    })

    node.appendChild(text)
    node.appendChild(removeBtn)
    node.style.textDecoration = todo.complete ? 'line-through' : 'none'
    node.addEventListener('click', () => {
        store.dispatch(toggleTodoAction(todo.id))
    })

    document.getElementById('todos')
        .appendChild(node)
    
}

function addGoalToDOM(goal) {
    const node = document.createElement('li')
    const text = document.createTextNode(goal.name)

    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeGoalAction(goal.id))
    })

    node.appendChild(text)
    node.appendChild(removeBtn)

    document.getElementById('goals')
        .appendChild(node)
}
