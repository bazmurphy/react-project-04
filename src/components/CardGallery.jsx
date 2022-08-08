import React from "react";

import Card from "../components/Card";

import cardData from "../data/cardData";

export default function CardGallery() {

    // console.log(cardData)

    const CardElements = cardData.map(element => {
        return <Card
                key = {element.id}
                cardAvailableSlots = {element.openSpots > 0 ? element.openSpots: "SOLD OUT"}
                cardPhoto = {element.coverImg}
                cardRating = {element.stats.rating}
                cardReviewCount = {element.stats.reviewCount}
                cardLocation = {element.location}
                cardDescription = {element.title}
                cardPrice = {element.price}
                />
    });

    return (
        <div className="card-gallery-container">
            {CardElements}
        </div>
    );
}