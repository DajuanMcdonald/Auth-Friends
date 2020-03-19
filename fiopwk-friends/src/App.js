import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css'
import FriendForm from './components/FriendForm';
import Home from './components/Home';

import Login from './Login';
import PrivateRoute from './routes/PrivateRoute';

// const Friends = () => <Link>Friends</Link>
// const Login = () => <Link>Login</Link>


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <nav className="navigation">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/friends">Friends</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              
            </ul>
          </nav>

            <Switch>    
              <PrivateRoute exact path='/friends' component={FriendForm} />
              <Route exact path='/login' component={Login} />
              <Route path="/" exact component={Home} />
              
              <Route component={Login} />
              
            </Switch>
          
        </div>
        
      
      </BrowserRouter>
    );
  }
}

export default App;