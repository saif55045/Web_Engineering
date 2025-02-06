function addtolist() {
    let input=document.querySelector('#inputtask');
    let li = document.createElement('li');
    li.innerText = input.value.trim();
    let ul = document.querySelector('ul');
    ul.append(li);
    input.value="";
}
let addtask=document.querySelector('#addtask');
addtask.onclick=addtolist;
let remtask=document.querySelector('#removetask');
remtask.onclick=function () {
    let list=document.querySelector('ul');
    let li=list.lastElementChild;
    if(li)
    {
        list.removeChild(li);
    }
}

