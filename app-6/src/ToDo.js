import React, { Component } from 'react'
import App from './App'

class ToDo extends Component {
    
    render() {
        return <p>{this.props.task}</p>
        
    }
}

export default ToDo