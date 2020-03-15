import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from './utils/AxiosWithAuth';
import './App.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            credentials: {
                username: 'Lambda School',
                password: 'i<3Lambd4'
            }
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
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data);

                this.props.history.push('/friends')
            })
            .catch(error => console.log(error.message.status))
    }

    render() {
        return (
            <div className="login-container">
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input
                        onChange={this.handleChanges}
                        value={this.state.credentials.username}
                        name='username'
                        type='text'
                    />


                    <label>Password:</label>
                    <input
                        onChange={this.handleChanges}
                        value={this.state.credentials.password}
                        name='password'
                        type='password'
                    />


                    <button>Login</button>
                </form>

            </div>
        );
    }
}

export default Login;