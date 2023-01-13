import {} from 'css-abc/components/general/searchBar.css';
import React, {useState} from 'react';


// Reference : https://codepen.io/geoffbuell/pen/bGgwEQj
function SearchBar(props) {
    const [searchVal, setSearchVal] = React.useState(props.search);

    let products = [
        'pandit ji', 'event manager', 'caterer', 'light', 'decor',
        'sound', 'dj', 'dance program', 'entertainment program'
    ];

    const handleInput = (e) => {
        setSearchVal(e.target.value);
    }

    const handleClearBtn = () => {
        setSearchVal('');
    }

    const filteredProducts = products.filter((product) => {
        return product.includes(searchVal.toLowerCase());
    });

    return (
        <div className='container'>
            <div className='input-wrap'>
                <i className="fas fa-search"></i>
                <label
                    for="product-search"
                    id="input-label"
                >
                    Product Search
                </label>
                <input
                    onChange={handleInput}
                    value={searchVal}
                    type="text"
                    name="product-search"
                    id="product-search"
                    placeholder="Search Services"
                />
                <i
                    onClick={handleClearBtn}
                    className="fas fa-times"
                ></i>
            </div>
            <div className="results-wrap">
                <ul>
                    {filteredProducts.map((product) => {
                        return <li key={product} className='list-item'><a href='#'>{product}</a></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;