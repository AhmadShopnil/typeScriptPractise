"use strict";
{
    const person1 = "ship";
    const person2 = "bike";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        id: 1,
        name: "Shopnil",
        email: "shopnil@gmail.com",
        skill: "Js"
    };
    const result = getPropertyValue(user, "name");
    const car = {
        id: 1,
        model: "toyota",
        year: 2023,
    };
    const result2 = getPropertyValue(car, "year");
}
