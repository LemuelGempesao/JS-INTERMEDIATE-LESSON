let username="Bro Code";
let schoolName="Ocana National High School";
let number="129-123-123-1231";
let numbers=34;
let names=Boolean("Lemuel");
let trot=true;

console.log(names);

console.log(typeof(trot))
console.log(typeof(numbers));
console.log(typeof(names));


console.log(schoolName.charAt(0),schoolName.charAt(2));
console.log(schoolName.indexOf("N"));
console.log(schoolName.length, schoolName.replaceAll("a", "e"),schoolName.replaceAll("n","m"));
document.write(username.length);
console.log(username.charAt(0));
console.log(username.indexOf("o"));
console.log(username.lastIndexOf("o"));
console.log(username);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());

// number=number.replaceAll("-","+");
number=number.replaceAll("-","");
console.log(number);

//slicing
let fullName="Lemuel Gempesao";
let fname;
let surname;


fname=fullName.slice(0, fullName.indexOf(" ")+1);
surname=fullName.slice(fullName.indexOf(" "));
console.log(fname, surname);

//method Chaining
console.log(fullName.charAt(0).toLowerCase());


