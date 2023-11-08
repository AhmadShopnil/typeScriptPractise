"use strict";
{
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("Nothing to search");
        }
    };
    // searchName("Shopnil")
    searchName(null);
    const throwError = (msg) => {
        throw new Error(msg);
    };
    // throwError("Custom  error ")
}
