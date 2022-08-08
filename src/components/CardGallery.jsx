import React from "react";

import Card from "../components/Card";

import cardData from "../data/cardData";

export default function CardGallery() {

    // console.log(cardData)

    const CardElements = cardData.map(element => {
        console.log(element)
        return <Card

                // KEY, we need to assign key to a unique id from our data set
                key = {element.id}


                // Third version: 

                // using the spread operator to spread "element" into the Component's props
                // it takes all the keys in the objects in cardData.js and then unpacks them all for us 
                // like this:
                // id = {element.id}
                // title = {element.title}
                // etc. etc.
                
                // {...element}

                // because its unpacked directly into props...
                // you then have to go back into the component and remove the sub-object name, props.element.____ becomes props.____


                // Second version :

                element = {element}


                // First version :

                // cardOpenSpots = {element.openSpots}
                // cardPhoto = {element.coverImg}
                // cardRating = {element.stats.rating}
                // cardReviewCount = {element.stats.reviewCount}
                // cardLocation = {element.location}
                // cardDescription = {element.title}
                // cardPrice = {element.price}

                />
    });

    return (
        <div className="card-gallery-container">
            {CardElements}
        </div>
    );
}