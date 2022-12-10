import '/Users/kumarssw/MyProjects/xem/src/css/components/general/tiles.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Reference : https://codepen.io/adambusha/pen/ZeBodz
function Tiles() {
    return (
        <div>
            <div className="row">
                <Link to="/searchPage" className={'link'}>
                    <div className="box">
                        Pandit Ji
                    </div>
                </Link>
                <div className="box">
                    Event Manager
                </div>
                <div className="box">
                    Caterer
                </div>
            </div>
            <div className="row">
                <div className="box">
                    Light & Decor
                </div>
                <div className="box">
                    Sound & DJ
                </div>
                <div className="box">
                    Dance & Entertainments
                </div>
            </div>
        </div>
    );
}

export default Tiles;