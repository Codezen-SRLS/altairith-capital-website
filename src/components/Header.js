import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleToggleMenu = () => setMenuOpen((prev) => !prev);
    const handleNavClick = (e) => {
        // Close menu when a link is clicked (mobile UX)
        const target = e.target;
        if (target.tagName === "A") {
            setMenuOpen(false);
        }
    };
    return (
        <header className="site-header">
            <div className="container nav">
                <div className="site-logo">
                    <Link to="/">
                        <img src={logo} alt="Altairith Capital" />
                    </Link>
                    <span className="site-title">Altairith Capital</span>
                </div>
                <button
                    className="menu-toggle"
                    aria-controls="primary-navigation"
                    aria-expanded={menuOpen}
                    onClick={handleToggleMenu}
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
                <nav
                    id="primary-navigation"
                    className={`nav-links ${menuOpen ? "open" : ""}`}
                    aria-label="Primary"
                    onClick={handleNavClick}
                >
                    <a href="#about">About</a>
                    <a href="#chairman">Chairman</a>
                    <a href="#mission">Mission</a>
                    <a href="#values">Values</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
