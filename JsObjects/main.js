let student1={
    fname:"Lemuel",
    age:20,
    school:"CTU Argao Campus",
    moto:sayMoto
};

function sayMoto(){
    return ("Ang taong matiyaga kapoy");
}

let students= function(name, surname, age, years){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.years=years;
    // this.motos=()=>{
    //     console.log("Time is not Gold");
    // };
    this.motos=sayMotos;
    };

    function sayMotos(){
        return ("Time is Gold")
    }





// object w/out constructor
console.log(student1.moto())
console.log(student1["fname"]);
console.log(student1.fname);


// object with constructor
studentOne=new students("Lemuel", "Gempesao", "20","Freshman");

console.log(studentOne.age);
console.log(studentOne.motos())

// objects inside array

let technocrats=[

{t1: "Albert", age: 12},
{t2: "Miko", age:14 }

];

console.log(technocrats[0].t1, technocrats[1].age);