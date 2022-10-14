import '/Users/kumarssw/MyProjects/xem/src/css/components/searchBar.css';
import React, {useState} from 'react';


// Reference : https://codepen.io/geoffbuell/pen/bGgwEQj
function SearchBar() {
    const [searchVal, setSearchVal] = React.useState('');

    let products = [
        'apples', 'bananas', 'grapefruit', 'kiwi', 'avocados',
        'lettuce', 'tomatoes', 'cheese', 'bread', 'yogurt',
        'peas', 'carrots', 'broccoli', 'beans', 'pizza',
        'pasta', 'rice', 'cereal', 'butter', 'milk',
        'eggs', 'onions', 'garlic', 'honey', 'soup',
        'salt', 'pepper', 'oregano', 'basil', 'paprika'
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
                    placeholder="Search Products"
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