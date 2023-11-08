{

    // promise

  const createPromise=():Promise<string>=>{

   return new Promise<string>((resolve, reject)=>{

    const data:string= "Hello world";
    // const data:any= null;
    if (data){
        resolve(data);
    }
    else{
    reject("failed to get data")
}
})
    }



    // calling promise data 
    const getData=async()=>{
        const data= await createPromise();
        return data
        
    }
getData();

















}