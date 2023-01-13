import {} from 'css-abc/components/general/SearchPageTiles.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function SearchPageTiles() {
    return (
        <div>
            <div className="searchpage-table">
                <Link to="/detailPage" className={'link'}>
                <div className="searchpage-tile">
                    <div className="item-image-parent">
                        <div className="item-image-main">
                            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default"/>
                        </div>
                    </div>

                    <div className="item-info-parent">
                        <div className="main-info">
                            <h4 className="title-info">Shree RadheShyam Ji Maharaj</h4>
                            <div className="star-rating">
                                <span>★★★★</span>★
                            </div>
                            <br></br>
                            <p className="price-info">Rate: <span id="price">₹ 5111.00</span></p>
                        </div>
                    </div>
                </div>
                </Link>

                <div className="searchpage-tile">
                    <div className="item-image-parent">
                        <div className="item-image-main">
                            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default"/>
                        </div>
                    </div>

                    <div className="item-info-parent">
                        <div className="main-info">
                            <h4 className="title-info">Shree Rakesh Tiwari</h4>
                            <div className="star-rating">
                                <span>★★★★</span>★
                            </div>
                            <br></br>
                            <p className="price-info">Rate: <span id="price">₹ 4221.00</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="searchpage-table">
                <div className="searchpage-tile">
                    <div className="item-image-parent">
                        <div className="item-image-main">
                            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default"/>
                        </div>
                    </div>

                    <div className="item-info-parent">
                        <div className="main-info">
                            <h4 className="title-info">Shree Harihar Prasad Maharaj</h4>
                            <div className="star-rating">
                                <span>★★★★</span>★
                            </div>
                            <br></br>
                            <p className="price-info">Rate: <span id="price">₹ 3551.00</span></p>
                        </div>
                    </div>
                </div>

                <div className="searchpage-tile">
                    <div className="item-image-parent">
                        <div className="item-image-main">
                            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default"/>
                        </div>
                    </div>

                    <div className="item-info-parent">
                        <div className="main-info">
                            <h4 className="title-info">Shree Guru Pandey</h4>
                            <div className="star-rating">
                                <span>★★★★</span>★
                            </div>
                            <br></br>
                            <p className="price-info">Rate: <span id="price">₹ 3811.00</span></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="searchpage-table">
                <div className="searchpage-tile">
                    <div className="item-image-parent">
                        <div className="item-image-main">
                            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default"/>
                        </div>
                    </div>

                    <div className="item-info-parent">
                        <div className="main-info">
                            <h4 className="title-info">Shree Narayan Pujari Mathura Wale</h4>
                            <div className="star-rating">
                                <span>★★★★</span>★
                            </div>
                            <br></br>
                            <p className="price-info">Rate: <span id="price">₹ 4821.00</span></p>
                        </div>
                    </div>
                </div>

                <div className="searchpage-tile">
                    <div className="item-image-parent">
                        <div className="item-image-main">
                            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default"/>
                        </div>
                    </div>

                    <div className="item-info-parent">
                        <div className="main-info">
                            <h4 className="title-info">Shree Mohan Das Pujari</h4>
                            <div className="star-rating">
                                <span>★★★★</span>★
                            </div>
                            <br></br>
                            <p className="price-info">Rate: <span id="price">₹ 7211.00</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPageTiles;