import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import Auth from './authentication/Auth';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render () {
    return (
      <>
        <Nav />
        <div className="body">
          <Route path='/' exact render={props => <Home auth={this.auth} {...props} />} />
          <Route path='/profile' component={Profile} />
        </div>
      </>
    );
  }
}
