let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lan: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 5 };
const obj2 = { b: 3, c: 3, d: 4 };

// {obj1: {…}, obj2: {…}}
let obj3 = { obj1, obj2 };

// if duplicate key the first occurence is removed
// {a: 1, b: 3, c: 3, d: 4}
obj3 = { ...obj1, ...obj2 };
// {a: 1, b: 3, c: 3, d: 4}
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Go for a run' },
  { id: 3, name: 'Buy Groceries' },
];

// Both Buy Milk
x = todos[0]['name'];
x = todos[0].name;

// Getting all keys of an object
// returns array of keys
x = Object.keys(todo);

x = Object.keys(todo).length;

// getting all value of an object
// returns array of value
x = Object.values(todo);

// Getting key and value pairs
// returns array of arrays
/**
 * [Array(2), Array(2), Array(2)]
    0: (2) ['id', 1]
    1: (2) ['name', 'Buy Milk']
    2: (2) ['completed', false]
*/
x = Object.entries(todo);

// check if an object has a property
// returns true if exist or else false
x = todo.hasOwnProperty('name');

console.log(x);
