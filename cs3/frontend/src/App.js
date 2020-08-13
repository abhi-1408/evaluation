import React from 'react';
import { Routes } from './Routes/Routes'
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <Link to='/' >dash</Link>
      <br />
      <Link to='/homepage' >homepage</Link>
      <Routes />
    </div>
  );
}

export default App;
