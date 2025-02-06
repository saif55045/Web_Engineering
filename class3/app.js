//splice(start,delete_count,replace)
let fruits=new Array("Apple","Banana","Orange");
fruits.splice(1,1);
console.log(fruits);
console.log(fruits.indexOf("Apple"));
fruits.forEach((val)=>(console.log(val.toUpperCase())));
let fruits1=fruits.filter(val=>(val=="Apple"))
console.log(fruits1);
let arr=[1,2,3,4];
arr=arr.map((val)=>(val+2));
console.log(arr);
let arr1=[1,2,3,1];
let set =new Set(arr1);
console.log(set);
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 
let max=numbers.reduce((max,el)=>{
    if(el<max)
        return max;
    else
        return el;
});
console.log(max);
let num1=[1,2,3];
let num2=[...num1];
console.log(num2===num1);

const obj1={
    name:"saif"
};
const obj2={
    rollno:"3644"
};
const mergeObjects=(...objs)=>({...objs[0],...objs[1]});
const objs=mergeObjects(obj1,obj2);
console.log(objs);
let num=[1,2,3,2];
num.forEach(element => {
    console.log(element)
});

