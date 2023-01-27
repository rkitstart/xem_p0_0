import {} from 'css-abc/components/general/footer.css';

function Footer() {
    return (
        <div className={'footer-margin'}>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">

                                <div className="contact-social">
                                    <ul>
                                        <li><a className="hover-target" href=""><i
                                            className="fab fa-facebook-f"></i></a></li>
                                        <li><a className="hover-target" href=""><i
                                            className="fab fa-linkedin-in"></i></a></li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>Copyright &copy; 2023 <img src="" alt="logo"/> All Rights
                    Reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;
