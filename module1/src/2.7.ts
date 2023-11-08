{
//  generic constraint with keyof operator

type Vehicle={
    bike:string;
    car:string;
    ship:string;
}

type Owner="bike" | "car" | "ship"  // manually
const person1:Owner="ship"

type Owner2= keyof Vehicle  // with keyof operator
const person2:Owner2="bike"






const getPropertyValue=<X, Y extends keyof X>(obj:X, key:Y)=>{
    return obj[key];
}

const user={
    id:1,
    name:"Shopnil",
    email:"shopnil@gmail.com",
    skill:"Js"
}
const result=getPropertyValue(user, "name")


const car={
    id:1,
    model:"toyota",
    year:2023,
}
const result2=getPropertyValue(car, "year")



















}