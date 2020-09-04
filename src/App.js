import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Nav from './components/Nav';

function App () {
  return (
    <>
      <Nav />
      <div className="body">
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </div>
    </>
  );
}

export default App;
