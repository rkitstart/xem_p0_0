import {} from 'css-abc/components/general/tiles.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Reference : https://codepen.io/adambusha/pen/ZeBodz
function Tiles() {
    return (
        <div>
            <div className="row">
                <Link to="/panditJi" className={'link'}>
                    <div className="box">
                        Pandit Ji
                    </div>
                </Link>
                <Link to="/eventManager" className={'link'}>
                    <div className="box">
                        Event Manager
                    </div>
                </Link>
                <Link to="/caterers" className={'link'}>
                    <div className="box">
                        Caterer
                    </div>
                </Link>
            </div>
            <div className="row">
                <Link to="/lightAndDecor" className={'link'}>
                    <div className="box">
                        Light & Decor
                    </div>
                </Link>
                <Link to="/soundAndDJ" className={'link'}>
                    <div className="box">
                        Sound & DJ
                    </div>
                </Link>
                <Link to="/danceAndEntertainment" className={'link'}>
                    <div className="box">
                        Dance & Entertainments
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Tiles;