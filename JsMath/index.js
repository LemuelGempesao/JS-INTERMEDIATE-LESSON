let a=document.getElementById("first");
let b=document.getElementById("second");
let c=document.getElementById("third");
let btn=document.getElementById("roll");

///////////////// SideFinder/////////////////


btn.onclick=function(){

    a.innerHTML=Math.floor(Math.random()*6)+1;
    b.innerHTML=Math.floor(Math.random()*6)+1;
    c.innerHTML=Math.floor(Math.random()*6)+1;
}

const subm =document.getElementById("sub");
sub.onclick=()=>{
const sidea = document.getElementById("sideA").value;
const sideb =document.getElementById("sideB").value;
const result=document.getElementById("result");


let results=Math.sqrt(Math.pow(sidea, 2) + Math.pow(sideb, 2));
result.innerText=results.toFixed(2);

}