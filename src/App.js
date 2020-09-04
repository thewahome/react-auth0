import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Private from './pages/Private';
import Public from './pages/Public';
import Nav from './components/Nav';
import Auth from './authentication/Auth';
import Callback from './pages/Callback';

export default function App (props) {
  const auth = new Auth(props.history);
  return (
    <>
      <Nav auth={auth} />
      <div className="body">
        <Route path='/' exact render={props => <Home auth={auth} {...props} />} />
        <Route path='/callback' render={props => <Callback auth={auth} {...props} />} />
        <Route path='/profile' render={props =>
          auth.isAuthenticated() ?
            <Profile auth={auth} {...props} /> : (
              <Redirect to='/' />
            )
        } />
        <Route path='/private' render={props =>
          auth.isAuthenticated() ?
            <Private auth={auth} {...props} /> : (
              auth.login()
            )
        } />
        <Route component={Public} path='/public' />
      </div>
    </>
  );
}

