// let age=window.prompt("how old are you?")
// age=Number(age);

// if (age==56){

//     console.log("Your'e too old for this!!");

// }

// else if (age<=45){
//     console.log("Yehey");

// }

// else{

//     console.log("Nooo");
// }
document.getElementById("btn").onclick=function(){
const gender=document.getElementById("gender");
const student=document.getElementById("subscribe");
const freshman=document.getElementById("fresh");
const sophomore=document.getElementById("soph");
const junior=document.getElementById("jun");
const senior=document.getElementById("sen");

if(gender.checked){
    alert("You are discounted");
}
else{
    alert("regular Price");
}

if(freshman.checked){
    alert("You selected Freshman");
}

else if(junior.checked){
    alert("You are a Junior");
}

else if(sophomore.checked){
    alert("You are a Sophmore");
}

else if(senior.checked){
    alert("You are a Senior");
}
}