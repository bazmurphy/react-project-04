import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

function Navbar() {
    return (
        <nav className="nav-container">
            <img className="nav-image" src={airbnbLogo} alt="" />
        </nav>
    );
}

export default Navbar;