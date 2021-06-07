import React from 'react'
import { render } from 'react-dom'

const Context = React.createContext()

function Parent() {
    return (
        <div>
            <h1>Parent</h1>
            <Child />
        </div>
    )
}

function Child () {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild />
        </div>
    )
}

function GrandChild ({ name }) {
    return (
        <Context.Consumer>
            {(name) => (
                <div>
                    <h1>Grand child</h1>
                    <h3>Name: {name}</h3>
                </div>
            )}
        </Context.Consumer>
    )
}

class App extends React.Component {
    render() {
        const name = 'Tyler'

        return (
            <Context.Provider value={name}>
                <Parent />
            </Context.Provider>
        )
    }
}

render(<App />, document.getElementById('root'))
