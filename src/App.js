import logo from './logo.svg';
import './_App.scss';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FcRouter from './router/Router';

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
      <FcRouter />
      
    </div>
  );
}

export default App;
