import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let count = 0;

const increment = () => {
  count++;
  ReactDOM.render(clickTimer(), document.getElementById('root'));
}

const clickTimer = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome from React Timer</h1>
        <h1 className="App-title">{new Date().toLocaleTimeString()}</h1>
      </header>
        <h1 className="App-title">Welcome from React Counter</h1>
        <p>Clicked {count} times.</p>
        <button onClick={increment} >Click</button>     
    </div>
  );
}

export default clickTimer;
