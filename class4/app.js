// function func1()
// {
//     console.log('i am function');
// }
// //1) ();
// //2) func1();
// let removeduplicate=function(arr){
//     let set=[];
//     for(let i=0; i<arr.length; i++)
//     {

//         if(!(set.includes(arr[i])))
//         {
//             set.push(arr[i]);
//         }
//     }
//     console.log(set);
// }

// //greet(arr);
// let arr = [1, 2, 3, 3];

// let filterArr = arr.filter((el, _, originalArr) => {
//     let count = originalArr.filter((e) => e === el).length; // Count occurrences
//     return count >= 2;
// });

// console.log(filterArr);

// let multiple=(a,b)=>a*b;
// let manipulator=(val1,val2,func)=>func(val1,val2);
// console.log(manipulator(2,3,multiple));
// function counter()
// {
//     let count=0;
//     return function(){
//         return count++;
//     }
// }
// console
// let myCounter = counter(); 

// console.log(myCounter()); 
let var1=[1,2,3];
function mul(val)
{
    return val.reduce(((el,res)=>res*el),1);
}
console.log(mul(var1));

setTimeout(() => console.log("Hello"), 2000);
// Explore what is function generators
