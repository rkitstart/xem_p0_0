import '/Users/kumarssw/MyProjects/xem/src/css/components/general/home.css';
import SearchBar from "./SearchBar";
import Tiles from "./Tiles";

function Home() {
    return (
        <div className='home'>
            <SearchBar/>
            <Tiles/>
        </div>
    );
}

export default Home;