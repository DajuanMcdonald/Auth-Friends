import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import './App.css'

const Friends = () => <Link>Friends</Link>
const Protected = () => <Link>Login</Link>


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
                </nav>
                  <Route path="/login"/>
                  <Route path="/friends"/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;