const temp=document.getElementById("temps");
const celsius=document.getElementById("cel");
const farenheit=document.getElementById("far");
const submit=document.getElementById("submit");
const result=document.getElementById("result");
console.log(temp.value);

submit.onclick=()=>{

    if(celsius.checked){
        result.innerText=farToCel(temp.value);
    }

    else if(farenheit.checked){
        result.innerText=CeltoFar(temp.value);
    }


}

function farToCel(temp){
    return `${(temp-32)*5/9}°C`;
}

function CeltoFar(temp){
    return `${temp*9/5+32}°F`;
}