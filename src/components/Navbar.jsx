import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

function Navbar() {
    return (
        <nav class="nav-container">
            <img class="nav-image" src={airbnbLogo} alt="" />
        </nav>
    );
}

export default Navbar;