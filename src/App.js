import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import Auth from './authentication/Auth';

export default function App (props) {
  const auth = new Auth(props.history);
  return (
    <>
      <Nav />
      <div className="body">
        <Route path='/' exact render={props => <Home auth={auth} {...props} />} />
        <Route path='/profile' component={Profile} />
      </div>
    </>
  );
}

