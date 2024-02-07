

// console.log("--------border-----------")
// var person={
//     fname:"Lemuel", surname:"Gempesao",
//     age:20, Course:"BIT-Comptech"
// };

// console.log(person.fname);
// console.log(`ang kurso kay ${person["Course"]}`)
// console.log(person["fname"]);
// console.log(person);
// console.log(typeof(person))

// function people(age, gender, nationality){

//     this.age=age;
//     this.gender=gender;
//     this.nationality=nationality;
//     this.birthyear=(number)=>{
//     this.birthyear=number-this.age;
//     }
//     this.fivefromnow=calcplus5;

    
// }

// function calcplus5(){
//         return 5 + this.age;
// }



// p1=new people(34,"male", "Filipino");
// p1.birthyear(2024);
// console.log(p1.fivefromnow());
// console.log(p1.birthyear);
// console.log(p1.age);
// console.log(p1.gender);
// function animal(legs, classfy, age){
//     this.legs=legs;
//     this.classfy=classfy;
//     this.age=age;
//     this.lifespan=(x)=>{
//     this.lifespan=this.age * x;
//     }
// }

// p1 =new animal(4, "mammal",45);
// p1.lifespan();
// console.log(p1.lifespan);
// console.log(p1.classfy);

var personarray=[];

personarray["name1"]="marhon";
personarray["age"]=56;
personarray["surname"]="Botoy";

console.log(personarray);
console.log(typeof(personarray))
console.log(personarray.length);
console.log(personarray["age"]);
console.log(personarray.age)

console.log(personarray["surname"]);


catArray=new Array(3);

// for(let i=0; i<catArray.length; i++)
// {catArray[i]=window.prompt(`Enter cat name ${i+1}`);
// }

catArray[0]="Josh";
catArray[1]="Dan";
catArray[2]="Micahhel";
console.log(catArray);

catArray1=["Nike", "Milo", "Mamimiy"];
addeddcat=catArray.concat(catArray1);
console.group(catArray,catArray1,addeddcat);


