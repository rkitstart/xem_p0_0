import './App.css';
import Home from "./components/general/Home";
import SearchPage from "./components/general/SearchPage";
import DetailPage from "./components/general/DetailPage";
import PanditJi from "./components/pages/PanditJi";
import EventManager from "./components/pages/EventManager";
import Caterers from "./components/pages/Caterers";
import LightAndDecor from "./components/pages/LightAndDecor";
import SoundAndDJ from "./components/pages/SoundAndDJ";
import DanceAndEntertainment from "./components/pages/DanceAndEntertainment";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import ContactUs from "./components/general/landingpage/ContactUs";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        {/*<Router>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/searchPage' element={<SearchPage/>}></Route>
                <Route exact path='/detailPage' element={<DetailPage/>}></Route>
                <Route exact path='/panditJi' element={<PanditJi/>}></Route>
                <Route exact path='/eventManager' element={<EventManager/>}></Route>
                <Route exact path='/caterers' element={<Caterers/>}></Route>
                <Route exact path='/lightAndDecor' element={<LightAndDecor/>}></Route>
                <Route exact path='/soundAndDJ' element={<SoundAndDJ/>}></Route>
                <Route exact path='/danceAndEntertainment' element={<DanceAndEntertainment/>}></Route>
            </Routes>
        </Router>*/}
        <ContactUs/>
        <Footer/>
    </div>
  );
}

export default App;
