import React from "react";

import star from "../assets/star.png";

export default function Card(props) {

    let cardOpenSpotsText;

    if (props.cardOpenSpots === 0) {
        cardOpenSpotsText = "SOLD OUT";
    } else if (props.cardLocation === "Online") {
        cardOpenSpotsText = "ONLINE";
    }

    return (
        <section className="card-container">
            <section className="card-photo-container">
                {cardOpenSpotsText !== undefined && <span className="card-status">{cardOpenSpotsText}</span>}
                <img className="card-photo" src={`../images/${props.cardPhoto}`} alt="" />
            </section>
            <section className="card-info-section-one">
                <img className="card-star" src={star} alt="" />
                <span className="card-rating">{props.cardRating}</span>
                <span className="card-rating-count">({props.cardReviewCount})</span>
                <span className="card-bullet-point">&bull;</span>
                <span className="card-location">{props.cardLocation}</span>
            </section>
            <section className="card-info-section-two">
                <span className="card-description">{props.cardDescription}</span>
            </section>
            <section className="card-info-section-three">
                <span className="card-from">From</span>
                <span className="card-price">${props.cardPrice}</span>
                <span className="card-per-person">/ person</span>
            </section>
        </section>
    );
}