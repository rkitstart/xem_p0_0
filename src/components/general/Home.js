import '/Users/kumarssw/MyProjects/xem_p0/src/css/components/general/home.css';
import SearchBar from "./SearchBar";
import Tiles from "./Tiles";
import Header from "./Header";

function Home() {
    return (
        <div className='home'>
            <Header/>
            <SearchBar search=""/>
            <Tiles/>
        </div>
    );
}

export default Home;