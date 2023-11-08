{
// type alias

type StudentType={
    name:string;
    age:number;
    gender:string;
    contuct?:string
}

const student1:StudentType={
    name:"Shopnil",
    age:25,
    gender:"male"
}

const student2:StudentType={
    name:"Dip",
    age:29,
    gender:"Female"
}


// type alias for function

type SumType=(a:number,b:number)=>number

const sum:SumType=(a,b)=> a+b

sum(5,20)





}