import React from "react";

function Test() {
    const firstName = "Baz";
    const lastName = "Murphy";
    
    const date = new Date();
    const hours = date.getHours();

    let hoursAdjusted = hours;

    if (hours > 12) {
        hoursAdjusted = hours % 12;
    }

    let timeOfDay;

    if (hours < 12 ) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }

    return (
        <div>
            <h1>Hello {firstName} {lastName}!</h1>
            <h1>It is currenty about {hoursAdjusted} o'clock!</h1>
            <h1>Good {timeOfDay}!</h1>
        </div>
    );
}

export default Test;