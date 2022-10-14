import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/general/SearchBar";
import Tiles from "./components/general/Tiles";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
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
        <SearchBar/>
      </header>*/}
      <SearchBar/>
      <Tiles/>
    </div>
  );
}

export default App;
