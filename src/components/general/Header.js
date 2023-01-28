import {} from 'css-abc/components/general/header.css';

function Header() {
    return (
        <div>
            <header className="header-fixed">

                <div className="header-limiter">

                    {/*Simplifying events, delivering excellence*/}
                    <h1><a href="#" className={'logo-img'}><span className={'margin-right'}> <img className={'logo-img'} src="https://xemstuff.s3.us-east-1.amazonaws.com/xem_logo_1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiBcrptDnAyiqGnkWSnWJWXr5EMjbwlpe7AikQdqJMF40wIhAL6b7uqgLzpk9kQIt4XVhlnBiPzu6sZ9Ml5Pw9LnOIFKKuQCCGQQABoMMDMzNDU5NDM0Nzc0IgySfPyR%2BOnRoTOQxagqwQLurN5Q9bW5ZTbAwlw%2FVUMrZR8dwfjq6F56DxnZbGPolNGNb2eh1iZEy7kSDkJg%2FOybBC683Vz3%2FmAg9NioGHJcWDqF3StqcAb1oo28JYRw7hZrDdFNcuNjksvKNGUGxh3y7SBlAvlP2VnGTwdDxfVqoPLrlpZMtvbph7SoNDcpkXpgWoX7fnFwiHC%2F%2BZRN78ABSrBOwkKPBTs5BleAWF0t9gP5r7aQ60W6I9LgqkqA%2B4w%2BL3m%2BW5e5N4mSqwgbQyfazeB9cR7dMwPu0RsE6R4aTWbziQktPWQztJlhtLTf2mPNQrWM7yKLST%2Bs4jl4cTm9gOGLWd7L2Gs0l2mL45FUqL0fJe0chLT29Dq237XrTeM57fAUgHelJzUafAR8%2FDF0U6IpELcOANdkBZhYJVyqw%2FYEDfIIiIQfE8qjZu7bpEUwldDVngY6swJAkgNnd8ziIvR5Sle88CTd6%2BKhO5zv%2FlxRHLMRPk7TIJrs5fy2GGjbEbGFMq%2Fg%2F1p9MLVU%2BYw6NAv3YW276o8iUuk2VoXOEiOXIkAB%2F8bzliWY8HL6LT1Gne2PhUaq1D6GAq0thuqDvjXjngZoXC6z7vkomjxP%2BuJPds%2F9YWUJrT2LelAuPFrQNzDZRDN8xwmC8oI1OHIVZ3Wyz%2Fa%2BPJzbYOBMXsO%2BBGPAaHbLTpsQoonfaxrBqaJkPKIpKSo6ECd3uOUPnhhhVxnmP1AdmfbOv2C%2FbWzutfK3eUIUMKS%2F4qP7N9EJESYeaTRSzNdFukEw7tyNVgbPA989sHCRii5fIMG%2Ftrf84PaEQzL2EcNGGgCHR9OwDY3Jq70gPp5sD%2BKrRZoPQ359jPpxynSuZY8Bc6d2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230128T183807Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQPSSWOULMO5LF3I7%2F20230128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9bdaf4f7b3eee35697fc231699ef30665b0bdb33fd02ce99c6a06d70a815879a" alt="logo"/></span>Xem Events</a></h1>

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
