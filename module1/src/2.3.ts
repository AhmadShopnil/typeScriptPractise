{
// generic type

const roll: Array<number>=[1,5,7]

// dynamic generic type
type GenericArray<T>=Array<T>

const boolArray: GenericArray<boolean>=[true,false]





const user:GenericArray<
{
name:string; age:number;id:number; gender?:string
}
>=[
    {
        name:"Shopnil",
        age:25,
        id:1,
        gender:"male"
    },
    {
        name:"Dip",
        age:50,
        id:1
        
    },
]








}