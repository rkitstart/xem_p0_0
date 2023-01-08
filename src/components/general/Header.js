import '/Users/kumarssw/MyProjects/xem_p0_p0/src/css/components/general/header.css';

function Header() {
    return (
        <div>
            <header className="header-fixed">

                <div className="header-limiter">

                    <h1><a href="#">Random Eventer <span>logo</span></a></h1>

                    <nav>
                        <a href="#">Home</a>
                        <a href="#" className="selected">Blog</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                        <a href="#">Faq</a>
                        <a href="#">Contact</a>
                    </nav>

                </div>

            </header>


            <div className="header-fixed-placeholder"></div>
        </div>
    );
}

export default Header;
