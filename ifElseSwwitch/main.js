// let age=56;


// switch(age){

//     case 12:
//         console.log("Mabuhay");
//         break;

//     case 15:
//         console.log("Yepeeyyy");
//         break;

//     default:
//         console.log("You are 56");
// }

let subscribe=document.getElementById("sub");
let submit=document.getElementById("submit");
let fre=document.getElementById("freshman");
let soph=document.getElementById("sophomore");
let junior=document.getElementById("junior");
let senior=document.getElementById("senior");

submit.onclick=()=>{

if(subscribe.checked){
    alert("You Subscribe To our School");
}

if (freshman.checked){
    console.log("You are a freshman");
}

else if(sophomore.checked){
    console.log("You are a sophomore");
}

else if(junior.checked){
    console.log("You are a junior");
}

else if(senior.checked){
    console.log("You are a senior");
}
else{
    console.log("You did not type anything");
}
}