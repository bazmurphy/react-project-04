import React from "react";

import airbnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <img className="nav-image" src={airbnbLogo} alt="airbnb logo" />
        </nav>
    );
}