import "/Users/kumarssw/MyProjects/xem_p0_p0/src/css/components/general/landingpage/contactUs.css";

function ContactUs() {
    return(
        <div className={'contactus-main'}>
            <form action="#" method="post">
                <h1>Contact Us</h1>
                <p>Please take a moment to get in touch, we will get back to you within 2 hours.</p>

                <div className="column">
                    <label htmlFor="the-name">Your Name</label>
                    <input type="text" name="name" id="the-name"/>

                    <label htmlFor="the-phone">Mobile Number</label>
                    <input type="tel" name="phone" id="the-phone"/>

                    <label htmlFor="the-email">Email Address (Optional)</label>
                    <input type="email" name="email" id="the-email"/>

                    <label htmlFor="event-type">What Type Of Event ?</label>
                    <select name="type" id="event-type">
                        <option value="">Choose one</option>
                        <option value="birthday">Birthday</option>
                        <option value="house_warming">House Warming</option>
                        <option value="marriage_anniversary">Marriage Anniversary</option>
                        <option value="bhagwan_pooja">Bhagwan Pooja</option>
                    </select>

                    <label htmlFor="event-date">Event date</label>
                    <input type="date" id="event-date" name="event_date"/>

                    <label htmlFor="event-location">Event Location</label>
                    <select name="event-location" id="event-location">
                        <option value="">Choose one</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="chennai">Chennai</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="column">
                    <label htmlFor="the-message">Message</label>
                    <textarea name="message" id="the-message"></textarea>
                    <input type="submit" value="Send Message"/>
                </div>
            </form>
        </div>
    );
}

export default ContactUs;