{

const addCourseToStudent=<T extends {id:number; name:string; email:string}>(  student:T )=>{
 const course="Next level Deb";
 return{
    ...student,
    course,
 }

}


const course1=addCourseToStudent({
    id:1,
    name:"Shopnil",
    email:"shopnil@gmail.com",
    skill:"Js"
})

const course2=addCourseToStudent({
    id:2,
    name:"oby",
    email:"oby@gmail.com",
    
})














}