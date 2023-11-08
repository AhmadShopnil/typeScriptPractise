{

// spreed oparator
 
    const friends:string[]=["Dip","oby","mahfuz"];

    const friends2:string[]=["Mehedi","Rakib","Bandhon"];

    friends.push(...friends2);

const mentors={
    typeScript:"Mezba",
    redux:"Mir"
}
const mentors2={
    prisma:"Firoz",
    next:"Tonmoy"
}

const allMentors={
    ...mentors,...mentors2
}



// rest oparator

const greetFriends=(...friends:string[])=>{
friends.forEach((friend:string)=>{
    console.log(`Hello ${friend}`)
})
}
greetFriends("Abul","Babul")



// destructuring










}