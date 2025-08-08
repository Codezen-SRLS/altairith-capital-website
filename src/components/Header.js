import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";

const Header = ({ isHome = true }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleToggleMenu = () => setMenuOpen((prev) => !prev);
    const handleNavClick = (e) => {
        // Close menu when a link is clicked (mobile UX)
        const target = e.target;
        if (target.tagName === "A") {
            setMenuOpen(false);
        }
    };

    const handleLogoClick = (e) => {
        if (!isHome) {
            // On non-home pages, allow default navigation to "/"
            return;
        }
        e.preventDefault();

        // On screens > 900px, main element is the scroll container
        // On screens <= 900px, window/body is the scroll container
        const isLargeScreen = window.innerWidth > 900;

        if (isLargeScreen) {
            // Scroll the main element on large screens
            const mainElement = document.querySelector("main");
            if (mainElement) {
                mainElement.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            // Scroll the window on smaller screens
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    const base = isHome ? "" : "/";
    return (
        <header className="site-header">
            <div className="container nav">
                <div className="site-logo">
                    <Link to="/" onClick={handleLogoClick}>
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
                    <a href={`${base}#about`}>About</a>
                    <a href={`${base}#chairman`}>Chairman</a>
                    <a href={`${base}#mission`}>Mission</a>
                    <a href={`${base}#values`}>Values</a>
                    <a href={`${base}#contact`}>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
