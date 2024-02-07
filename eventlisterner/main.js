const object=document.querySelector(".object");
let x=0;
let y=0;
let move=10;

object.addEventListener("keyup", event=>{
    if (event.key.startsWith("Arrow");

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
})












const guess=document.querySelector(".guess");

guess.addEventListener("keyup", function (event) {
    console.log("Key released:", event.key);

    // Your code to handle the key release goes here
});