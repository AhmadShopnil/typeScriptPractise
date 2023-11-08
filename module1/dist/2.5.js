"use strict";
{
    //normal string type y with funtion
    const createArray = (param) => {
        return [param];
    };
    // function with  generic
    const createArrayWithGEneric = (param) => {
        return [param];
    };
    // function with  generic tupple
    const createArrayWithGenericTupple = (param1, param2) => {
        return [param1, param2];
    };
    const array1 = createArray("Shopnil");
    const array2 = createArrayWithGEneric(true);
    const array3 = createArrayWithGenericTupple("Hello", 10);
}
