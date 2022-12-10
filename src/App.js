import './App.css';
import Home from "./components/general/Home";
import SearchPage from "./components/general/SearchPage";
import DetailPage from "./components/general/DetailPage";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/searchPage' element={<SearchPage/>}></Route>
                <Route exact path='/detailPage' element={<DetailPage/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
