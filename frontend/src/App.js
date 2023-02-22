import React from 'react';

import Nav from  './components/Nav/Nav'
import Home from './pages/Home'
import Login from  './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div >
      <Nav/>
      <Home />
      <Login />
      <Register />
    </div>
  );
}

export default App;
