let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];
console.log(numbers);
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');
console.log(fruits);

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// ['apple', 'grape'] //changin the fruits length
fruits.length = 2;

// (3) ['apple', 'grape', 'orange']
fruits[fruits.length] = 'orange';

x = fruits;

console.log(x);
