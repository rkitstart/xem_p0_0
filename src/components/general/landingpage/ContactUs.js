import "/Users/kumarssw/MyProjects/xem_p0_p0/src/css/components/general/landingpage/contactUs.css";

function ContactUs() {
    return(
        <div className={'contactus-main'}>
            <form action="#" method="post">
                <h1>Contact Us</h1>
                <p>Please take a moment to get in touch, we will get back to you shortly.</p>

                <div className="column">
                    <label htmlFor="the-name">Your Name</label>
                    <input type="text" name="name" id="the-name"/>

                        <label htmlFor="the-email">Email Address</label>
                        <input type="email" name="email" id="the-email"/>

                            <label htmlFor="the-phone">Phone Number</label>
                            <input type="tel" name="phone" id="the-phone"/>

                                <label htmlFor="the-reason">How can we help you?</label>
                                <select name="reason" id="the-reason">
                                    <option value="">Choose one</option>
                                    <option value="web">I need web design services</option>
                                    <option value="video">I need you to produce a video</option>
                                    <option value="3d">I need 3D polygon things</option>
                                </select>
                </div>
                <div className="column">
                    <label htmlFor="the-message">Message</label>
                    <textarea name="message" id="the-message"></textarea>
                    <label>
                        <input type="checkbox" name="newsletter" value="yes"/> Join our mailing list?
                    </label>
                    <input type="submit" value="Send Message"/>
                </div>
            </form>
        </div>
    );
}

export default ContactUs;