import React from "react";

import star from "../assets/star.png";

export default function Card(props) {

    // console.log(props)
    // console.log(props.element)
    // console.log(props.element.openSpots)

    let openSpotsText;

    if (props.element.openSpots === 0) {
        openSpotsText = "SOLD OUT";
    } else if (props.element.location === "Online") {
        openSpotsText = "ONLINE";
    }

    return (
        <section className="card-container">
            <section className="card-photo-container">
                {openSpotsText !== undefined && <span className="card-status">{openSpotsText}</span>}
                <img className="card-photo" src={`../images/${props.element.coverImg}`} alt="" />
            </section>
            <section className="card-info-section-one">
                <img className="card-star" src={star} alt="" />
                <span className="card-rating">{props.element.stats.rating}</span>
                <span className="card-rating-count">({props.element.stats.reviewCount})</span>
                <span className="card-bullet-point">&bull;</span>
                <span className="card-location">{props.element.location}</span>
            </section>
            <section className="card-info-section-two">
                <span className="card-description">{props.element.title}</span>
            </section>
            <section className="card-info-section-three">
                <span className="card-from">From</span>
                <span className="card-price">${props.element.price}</span>
                <span className="card-per-person">/ person</span>
            </section>
        </section>
    );
}