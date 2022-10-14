import React, {useState} from 'react';

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const searchList = [
        { subSearch: "PanditJi", fullSearch: "PanditJi for Housewarming" },
        { subSearch: "PanditJi", fullSearch: "PanditJi for Ganesh Pooja" },
        { subSearch: "Event Manager", fullSearch: "Event Manager for Birthday Celebration" },
        { subSearch: "Event Manager", fullSearch: "Event Manager for Marriage Anniversary" },
    ];
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        searchList.filter((searchElement) => {
            return searchElement.name.match(searchInput);
        });
    }
    return <div>

        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />

        <table>
            <tr>
                <th>SubSearch</th>
                <th>FullSearch</th>
            </tr>

            {searchList.map((searchElement) => {

                <div>
                    <tr>
                        <td>{searchElement.subSearch}</td>
                        <td>{searchElement.fullSearch}</td>
                    </tr>
                </div>

            })}
        </table>

    </div>
}

export default SearchBar;