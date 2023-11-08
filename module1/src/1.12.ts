{
   
  const searchName=(value:string|null)=>{
    if(value){
        console.log("Searching")
    }
    else{
        console.log("Nothing to search")
    }
  }  

// searchName("Shopnil")
searchName(null)



const throwError=(msg:string): never=>{
    throw new Error(msg)
};

// throwError("Custom  error ")




}