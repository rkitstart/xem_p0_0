import '/Users/kumarssw/MyProjects/xem_p0/src/css/components/general/detailPage.css';

function DetailPage() {
    return (

        <section id="product-info">

            <div className="item-image-parent">
                <div className="item-list-vertical">
                    <div className="thumb-box">
                        <img src="https://i.ibb.co/VJf6fXm/thumb1.jpg" alt="thumbnail"/>
                    </div>
                    <div className="thumb-box">
                        <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail"/>
                    </div>
                    <div className="thumb-box">
                        <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail"/>
                    </div>
                    <div className="thumb-box">
                        <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail"/>
                    </div>

                </div>
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

                <div>
                    <p className="description-info">
                        This package includes service of shree radheshyam ji maharaj for housewarming ceremony.
                    </p>
                </div>

                <br></br>
                <div>
                        <label>Requirement date : </label>
                        <input type="date" id="birthday" name="birthday" value="2023-02-08"/> &#9989; Available
                </div>
                <div className="book-now-div">
                    <button className="book-now">Book Now</button>
                </div>
            </div>
        </section>
    );
}

export default DetailPage;