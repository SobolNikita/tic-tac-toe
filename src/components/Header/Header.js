import Link from "../Link/Link";

import "./header.css";

function Header() {
    return (
        <div className="header">
            <Link text="Tic Tac Toe" to="/" />
            <div className="header__nav">
                <Link text="home" to="/" />
                <Link text="about" to="/" />
                <Link text="contact" to="/" />
            </div>
        </div>
    );
}

export default Header;
