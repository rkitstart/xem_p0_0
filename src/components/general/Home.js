import {} from 'css-abc/components/general/home.css';
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