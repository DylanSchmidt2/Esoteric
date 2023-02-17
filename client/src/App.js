import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login';
import SignUp from './components/SignUp'


function App() {
  return (
    <div>

      <Home />
      <Header />
      <Login />
      <SignUp />
      

    </div>

  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
