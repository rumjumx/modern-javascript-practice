const firstName = 'John';
const lastName = 'Doe';
const age = 30;

let person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  // renaming id to todoId
  id: todoId,
  title,
  //   renaming after destructuring nested
  user: { name: junk },
} = todo;

console.log(todoId, title, junk);

// Destructure arrays
const numbers = [23, 67, 33, 49];

// this is rest operators
const [first, second, ...nums] = numbers;
// 23 67 (2) [33, 49]
console.log(first, second, nums);
