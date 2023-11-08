"use strict";
{
    // spreed oparator
    const friends = ["Dip", "oby", "mahfuz"];
    const friends2 = ["Mehedi", "Rakib", "Bandhon"];
    friends.push(...friends2);
    const mentors = {
        typeScript: "Mezba",
        redux: "Mir"
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tonmoy"
    };
    const allMentors = Object.assign(Object.assign({}, mentors), mentors2);
    // rest oparator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hello ${friend}`);
        });
    };
    greetFriends("Abul", "Babul");
    // destructuring
}
