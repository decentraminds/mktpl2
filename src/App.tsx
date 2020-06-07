import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Wallet from './Wallet';


ReactDOM.render(<Wallet />, document.getElementById('root'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="/">Open Wallet</a>
      </header>
    </div>
  );
}

export default App;
