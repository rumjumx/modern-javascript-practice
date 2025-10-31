// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);
// Uncaught ReferenceError: Cannot access 'age' before initialization
// console.log(age);

let age = 30;

console.log(age);

// Naming Conventions
// Only letters, numbers, underscores and dollar signs
// Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore/snakecase
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// Uncaught SyntaxError: Missing initializer in const declaration
// const y;

// Uncaught TypeError: Assignment to constant variable.
// x = 25;

const arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

const person = {
  name: 'Maddy',
};

person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
