import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

class App extends Component { 
    render() {
        return (
            <Router>
                <div className='container'>
                        Hello World
                </div>
            </Router>   
        )
    }
}

export default App