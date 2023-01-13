import {} from 'css-abc/components/general/searchPage.css';
import SearchBar from "./SearchBar";
import SearchPageTiles from "./SearchPageTiles";
import BaseFilter from "../filters/BaseFilter";

function SearchPage() {
    return (
        <div className='searchPage'>
            <SearchBar search="Pandit Ji"/>
            <BaseFilter/>
            <SearchPageTiles/>
        </div>
    );
}

export default SearchPage;