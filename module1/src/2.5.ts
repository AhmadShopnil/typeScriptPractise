

{


//normal string type y with funtion
const createArray =(param:string):string[]=>{
    return [param]
}

// function with  generic
const createArrayWithGEneric=<T>(param:T):T[]=>{
    return[param]

}

// function with  generic tupple
const createArrayWithGenericTupple=<T,Q>(param1:T, param2:Q):[T,Q]=>{
    return[param1,param2]

}

const array1=createArray("Shopnil");

const array2=createArrayWithGEneric <boolean>(true);

const array3 =createArrayWithGenericTupple<string, number>("Hello", 10)








}