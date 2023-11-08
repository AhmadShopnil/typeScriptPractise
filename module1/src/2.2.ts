
{
// interface
interface User {
    name:string;
    age:number
}

const user:User={
    name:"shopnil",
    age:100,
}



interface UserWithRoll2 extends User{
    role:number
}

const user3:UserWithRoll2={
    name:"Dip",
    age:10,
    role:2
}




// alias
type User2= {
    name:string;
    age:number;
    
}

type UserWithRoll= User2 & {role:number}

const user2:UserWithRoll={
    name:"shopnil",
    age:100,
    role:1
}





type Roll1= number[];

const roll1:Roll1=[1,2,3]


// using interface array alias
interface Roll2{
    [index:number]:number
}


const roll2:Roll2=[1,2,3]




}


