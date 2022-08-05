import React from "react";

import Card from "../components/Card";

import cardPhotoKatie from "../assets/katie-zaferes.png";

function CardGallery() {
    return (
        <div className="card-gallery-container">
            <Card
                cardPhoto = {cardPhotoKatie}
                cardRating = {5.0}
                cardReviewCount = {6}
                cardLocation = {"USA"}
                cardDescription = {"Life Lessons with Katie Zeferes"}
                cardPrice = {136}
            />
        </div>
    );
}

export default CardGallery;