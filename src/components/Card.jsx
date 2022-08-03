import React from "react";
import cardPhoto from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

function Card() {
    return (            
        <section className="card-container">
            <section className="card-photo-container">
                <span className="card-status">SOLD OUT</span>
                <img className="card-photo" src={cardPhoto} alt="" />
            </section>
            <section className="card-info-section-one">
                <img className="card-star" src={star} alt="" />
                <span className="card-rating">5.0</span>
                <span className="card-rating-count">(6)</span>
                <span className="card-bullet-point">&bull;</span>
                <span className="card-location">USA</span>
            </section>
            <section className="card-info-section-two">
                <span className="card-description">Life lessons with Katie Zaferes </span>
            </section>
            <section className="card-info-section-three">
                <span className="card-from">From</span>
                <span className="card-price">$136</span>
                <span className="card-per-person">/ person</span>
            </section>
        </section>
    );
}

export default Card;