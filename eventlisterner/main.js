const object=document.getElementById("object1");
let x=0;
let y=150;
const move=10;
const object2=document.getElementById("object2");
let x2=0;
let y2=0;
const move2=10;

document.addEventListener("keydown", event=>{

    if (event.key.startsWith("Arrow")){

    switch(event.key){


        case "ArrowUp":
            y-=move;
            break;

        case "ArrowDown":
            y+=move;
            break;

        case "ArrowLeft":
             x-=move;
             break;
    
        case "ArrowRight":
             x+=move;
             break;
    }


    object.style.top=`${y}px`;
    object.style.left=`${x}px`;
}

else{
    switch(event.key){


        case "w":
            y2-=move;
            break;

        case "s":
            y2+=move;
            break;

        case "a":
             x2-=move;
             break;
    
        case "d":
             x2+=move;
             break;
    }


    object2.style.top=`${y2}px`;
    object2.style.left=`${x2}px`;


}
});















