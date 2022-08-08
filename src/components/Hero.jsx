import React from "react";

import photoGrid from "../assets/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero-container">
            <section className="hero-section-one">
                <img className="hero-section-one-photo-grid" src={photoGrid} alt="" />
            </section>
            <section className="hero-section-two">
                <h1 className="hero-section-two-h1">Online Experiences</h1>
                <p className="hero-section-two-p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </section>
    );
}