
{
// Function

    function sum(a:number,b:number):number{
        return a+b;
        }
        sum(10,5);
        
        
        
        const arrowSum=(a:number,b:number=30)=> a+b;
        arrowSum(20,25)
        
        
        // method
        
        const user={
            name:"shopnil",
            age:23,
            addAge(age:number):number{
                return this.age+age
            }
        }



}