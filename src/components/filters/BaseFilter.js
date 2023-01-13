import '/Users/kumarssw/MyProjects/xem_p0_p0/src/css/components/filters/baseFilter.css';
import {} from 'css-abc/components/filters/baseFilter.css';

function BaseFilter() {
    return (
        <div className="base-filter">
            <div className="filter-title">
                <p><b>Filters</b></p>
            </div>
            <div id="checkboxes">
                <br/>
                <label><b>Select Event</b></label>
                <br/>
                <br/>
                <ul>
                    <li><input type="checkbox"/> Housewarming </li><br/>
                    <li><input type="checkbox"/> Ganesh Pooja </li><br/>
                    <li><input type="checkbox"/> Deepawali Pooja </li><br/>
                    <li><input type="checkbox"/> Ayudha Pooja </li><br/>
                </ul>
            </div>
        </div>
    );
}

export default BaseFilter;