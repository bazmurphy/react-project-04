import React from "react";
import photoGrid from "../assets/photo-grid.png"

function Hero() {
    return (
        <section class="hero-container">
            <section class="hero-section-one">
                <img class="hero-section-one-photo-grid" src={photoGrid} alt="" />
            </section>
            <section class="hero-section-two">
                <h1 class="hero-section-two-h1">Online Experiences</h1>
                <p class="hero-section-two-p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </section>
    );
}

export default Hero;