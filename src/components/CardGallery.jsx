import React from "react";

import Card from "../components/Card";

import cardData from "../data/cardData"

function CardGallery() {

    console.log(cardData)

    const CardElements = cardData.map(element => {
        return <Card
                cardAvailableSlots = {element.openSpots > 0 ? element.openSpots: "SOLD OUT"}
                cardPhoto = {element.coverImg}
                cardRating = {element.stats.rating}
                cardReviewCount = {element.stats.reviewCount}
                cardLocation = {element.location}
                cardDescription = {element.description}
                cardPrice = {element.price}
                />
    });

    return (
        <div className="card-gallery-container">
            {CardElements}
        </div>
    );
}

export default CardGallery;