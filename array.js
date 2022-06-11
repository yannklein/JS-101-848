// ARRAY CRUD
const students = ['Michelle', 'Raj', 'Hamish'];

// Create
students.push("Ethan");
console.log(students);

// Read
console.log(students[1]);

// Update
students[0] = "Super Michelle";
console.log(students);

// Delete
students.splice(0,1);
console.log(students);

// Iterate
// () => {}  JS arrow function
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});