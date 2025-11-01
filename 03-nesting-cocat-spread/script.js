let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// pushing an array of berries to fruits array
// (4) ['apple', 'pear', 'orange', Array(3)]
// fruits.push(berries);

// Accessing value from nested array
// strawberry
// x = fruits[3][0];

const allFruits = [fruits, berries];

// (2) [Array(4), Array(3)]
x = allFruits;
// rasberry
x = allFruits[1][2];

// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']
x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// (6) [1, 2, Array(2), 5, Array(2), 8]
x = arr;
// (8) [1, 2, 3, 4, 5, 6, 7, 8]
x = arr.flat();

// Static Methods on Array Object
// true
x = Array.isArray(fruits);
// false
x = Array.isArray('hello');

// (5) ['1', '2', '3', '4', '5']
// Creates an array from an iterable object.
x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

// (3) [1, 2, 3]
x = Array.of(a, b, c);

console.log(x);
