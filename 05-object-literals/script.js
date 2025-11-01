let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// accessing property from an object
x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[1];

// Updating property
person.name = 'Jane Doe';
person.isAdmin = false;
person['address'].city = 'Bos';
person.address.city = 'Boston';

// deleting a property
delete person.age;
delete person['isAdmin'];

// adding a property
person.hasChildren = true;

// assigning a function to property greet
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// property key can be of multiple word but its not recommended
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);
