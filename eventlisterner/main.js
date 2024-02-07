const object=document.getElementById("object");
let x=0;
let y=0;
const move=10;

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
}

    object.style.top=`${y}px`;
    object.style.left=`${x}px`;

});








// const guess=document.querySelector(".guess");

// guess.addEventListener("keyup", function (event) {
//     console.log("Key released:", event.key);

//     // Your code to handle the key release goes here
// });