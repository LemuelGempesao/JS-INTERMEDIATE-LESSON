let fname="Marvin C. Kabahog"
let number=[12,23,34,43,5];
let employees=["Lemuel", "Karen", "Marivic", "Joan"];


number.forEach(cube);
number.forEach(display);
console.log(number);
console.log("-------ARRAY STRINGS-------");
employees.forEach(change);
console.log(employees);
employees.forEach(display);
function change(element, index, array){
    array[index]=element.replaceAll("a","e");
}

function display(element){
    console.log(element);
}

function square(element, index, array){
    array[index]=Math.pow(element, 2);
}

function cube(element, index, array){
   return array[index]=Math.pow(element, 3);
}

console.log(fname.charAt(2));
console.log(fname[2]);
console.log(typeof(fname));
console.log(fname.indexOf("M"));
console.log(fname.lastIndexOf("a"));


let firstName=fname.slice(0, fname.indexOf(" "));
let surName=fname.slice(fname.lastIndexOf(" ")+1);


console.log(firstName);
console.log(surName);
console.log(fname.slice(0, 5));
console.log(fname.trim())

console.log(fname.replace("a", "e"));
console.log(fname.replaceAll("a", "e"));
console.log(fname.length);
console.log(fname);

console.log(fname.replace("a", "e"));




// spread operator

// let a=2, b=3, c=4;


// function total (...numbers){
//     let total =0;
//     for (number of numbers){
//         total+=number;
//     }

//     return total;
// }

// console.log(total(a,b,c,6,0));