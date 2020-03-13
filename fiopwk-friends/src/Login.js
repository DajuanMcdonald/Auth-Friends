import React from 'react';
import { Link } from 'react-router-dom';

const Public = () => <Link>Public</Link>
const Protected = () => <Link>Protected</Link>

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <button>Login</button>

            </div>
        );
    }
}

export default Login;