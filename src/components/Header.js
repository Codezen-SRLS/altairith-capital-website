import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";

const Header = () => {
    return (
        <header className="site-header">
            <div className="container nav">
                <div className="site-logo">
                    <Link to="/">
                        <img src={logo} alt="Altairith Capital" />
                    </Link>
                    <span className="site-title">Altairith Capital</span>
                </div>
                <nav className="nav-links" aria-label="Primary">
                    <a href="#about">About</a>
                    <a href="#chairman">Chairman</a>
                    <a href="#mission">Mission</a>
                    <a href="#vision">Vision</a>
                    <a href="#values">Values</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
