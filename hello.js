// lg + tab
// console.log(typeof("Hello 848s!"));
// // number to string
// console.log((42).toString());
// // string to number
// console.log(parseInt("42", 10));

// const student = "Raj";
// let age = 21;

// console.log(`${student} is ${age} yrs-old.`);
// age += 1;
// // CANNOT RE-ASSIGN A CONST VARIABLE
// // student = "Super Raj";
// console.log(`${student} will be ${age} yrs-old next year.`);

const firstName = "jeNnY";

console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.slice(0,3)); // from index 0, three characters
console.log(firstName.slice(1)); // from first char until the end
console.log(firstName.slice(0,-1)); // get rid of last char

console.log(firstName.toUpperCase()); 
console.log(firstName.toLowerCase()); 

const studentString =  "Ethan, Jonathan, Tyler, Ashish, Zach"
const anotherStudentString = "Ethan Jonathan Tyler Ashish Zach"

// console.log(studentString.split(", "));
// console.log(anotherStudentString.split(" "));

const students = studentString.split(", ")
console.log(students);

console.log(students.join()); // put commas by default
console.log(students.join(""));