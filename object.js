const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(student['firstName']);
console.log(student.firstName);

student.firstName = "Super Boris";
console.log(student);

const key = 'lastName';
// console.log(student.key) NOT WORKING!
console.log(student[key]) 