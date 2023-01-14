import {} from 'css-abc/components/general/landingpage/contactUs.css';

function ContactUs() {
    const contactDetailsMailer = () => {
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        const name = document.getElementById("the-name").value;
        const phone = document.getElementById("the-phone").value;
        const email = document.getElementById("the-email").value;
        const eventType = document.getElementById("event-type").value;
        const eventDate = document.getElementById("event-date").value;
        const eventLocation = document.getElementById("event-location").value;
        const message = document.getElementById("the-message").value;

        var raw = JSON.stringify({"customerName":name,"mobileNumber":phone,
            "emailAddress":email,
            "eventType":eventType,
            "eventDate":eventDate,
            "eventLocation":eventLocation,
            "message": message
        });
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://sdofesc9j3.execute-api.ap-northeast-1.amazonaws.com/Dev", requestOptions)
            .then(response => response.text())
            .then(result => alert(JSON.parse(result).body))
            .catch(error => console.log('error', error));
    }

    const handleFormChange = (e) => {
        const name = document.getElementById("the-name").value;
        const phone = document.getElementById("the-phone").value;
        const email = document.getElementById("the-email").value;
        const eventType = document.getElementById("event-type").value;
        const eventDate = document.getElementById("event-date").value;
        const eventLocation = document.getElementById("event-location").value;
        const message = document.getElementById("the-message").value;
        const submitButton = document.getElementById("submit-button");

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(name == "" || !phone.match("[0-9]{10}") || !email.match(validRegex) ||
            eventType == "" || eventLocation == "") {
            submitButton.disabled = true;
            submitButton.setAttribute('class', 'noHover');
        } else {
            submitButton.disabled = false;
            submitButton.classList.remove('noHover');
        }
    }
    return(
        <div className={'contactus-main'}>
            <form action="#" method="post" onChange={handleFormChange}>
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
                    <input type="date" id="event-date" name="event-date"/>

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
                    {/*<input type="submit" value="Send Message"/>*/}
                    <button type="button"
                            onClick={contactDetailsMailer} id={'submit-button'}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactUs;