import React, { Component } from 'react'

class Login extends Component {
    constructor () {
        super()

        this.state = {
            userName: '',
            userPass: ''
        }
    }

    handleChangeUser (value) {
        this.setState ({userName: value})
    }

    handleChangePass (value) {
        this.setState ({userPass: value})
    }

    alertUser = () => {
        alert(`Username: ${this.state.userName} Password: ${this.state.userPass}`)
    }
    
    render() {
        return (
            <div>
                <input 
                    placeholder="username" 
                    className="input"
                    onChange={ (event) => this.handleChangeUser(event.target.value)}>
                </input>
                <input 
                    placeholder="password" 
                    className="input"
                    onChange={ (event) => this.handleChangePass(event.target.value)}>
                </input>
                <button onClick={ () => this.alertUser()}>Login</button>
            </div>
        )
    }
}

export default Login