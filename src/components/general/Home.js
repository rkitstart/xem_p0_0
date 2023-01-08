import '/Users/kumarssw/MyProjects/xem_p0_p0/src/css/components/general/home.css';
import SearchBar from "./SearchBar";
import Tiles from "./Tiles";

function Home() {
    return (
        <div className='home'>
            <SearchBar search=""/>
            <Tiles/>
        </div>
    );
}

export default Home;