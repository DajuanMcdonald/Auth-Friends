import React from 'react';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
import './App.css'

import Login from './Login';
import PrivateRoute from './routes/PrivateRoute';

const Friends = () => <Link>Friends</Link>
const Login = () => <Link>Login</Link>


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App-link">
                <nav className="navigation">
                  <ul>
                    <li>
                      <Link to="/friends">
                          Friends

                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                          Login

                      </Link>
                    </li>
                  </ul>

                  <Switch>
                    <PrivateRoute exact path='/friends' component={Friends} />
                    <Route path='/login' component={Login} />
                    
                  </Switch>
                </nav>
                  <Route path="/login"/>
                  <Route path="/friends"/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;