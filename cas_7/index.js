// console.log('Hello World');
// console.log(document);

let btnCount=document.getElementById('btnCount');
let btnCount2=document.getElementById('btnCount2');
let count=0;
let noOfClicksDiv=document.querySelector('.no-of-clicks');

btnCount.addEventListener('click', function(){
    count++;
    // noOfClicksDiv.innerText=count;
    noOfClicksDiv.innerHTML=`<b>${count}</b>`;
})

btnCount2.addEventListener('mouseover', function(){
    if(count>0)
        count--;
    noOfClicksDiv.innerHTML=`<b>${count}</b>`;
})
