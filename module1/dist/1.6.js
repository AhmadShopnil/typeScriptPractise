"use strict";
{
    // Function
    function sum(a, b) {
        return a + b;
    }
    sum(10, 5);
    const arrowSum = (a, b = 30) => a + b;
    arrowSum(20, 25);
    // method
    const user = {
        name: "shopnil",
        age: 23,
        addAge(age) {
            return this.age + age;
        }
    };
}
