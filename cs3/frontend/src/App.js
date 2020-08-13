import React from 'react';
import logo from './logo.svg';
import { Routes } from './Routes/Routes'
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Link to='/' >dash</Link>
      <br />
      <Link to='/homepage' >homepage</Link>
      <Routes />
    </div >
  );
}

export default App;
