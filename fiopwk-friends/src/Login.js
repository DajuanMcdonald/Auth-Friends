import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post()
        .then()
        .catch()
    }
    render() {
        return (
            <div className="login-container">
                <form onSubmit={this.login}>
                    <input
                    onChange={this.handleChanges}
                    value={this.state.credentials/username} 
                    name='username'
                    type='text'>
                    </input>

                    <input
                    onChange={this.handleChanges}
                    value={this.state.credentials.password}
                    name='password'
                    type='password'
                    >
                    </input>

                <button>Login</button>
                </form>

            </div>
        );
    }
}

export default Login;