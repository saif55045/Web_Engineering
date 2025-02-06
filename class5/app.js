document.getElementById('title').innerText="heading Changed";
let container=document.getElementById('main_container');
container.innerText="I am Somewhere";
container.style.color="blue";
container.style.backgroundColor="#333";
let myimage=document.getElementById('image');
myimage.src="sss.jpg";
let body=document.body;
let button=document.createElement('button');
button.innerText="Click me!";
body.append(button);
button.addEventListener('click', ()=>{
    alert('I am clicked');
});
let count=0;
let myelem=document.getElementById('myElement');
myelem.addEventListener('mouseenter',()=>
{
    myelem.style.color='red';
});
myelem.addEventListener('mouseleave',()=>
{
    myelem.style.color='black';
});
let elements=document.querySelectorAll('*');
elements.forEach((e)=>console.dir(e));