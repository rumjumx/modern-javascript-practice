let x;

const name = 'John';
const age = 30;

// Hello, my name is John and I am 30 years old
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
// Hello, my name is John and I am 30 years old
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
// const s = 'Hello World';
const s = new String('Hello World');

// string
x = typeof s;

// but when we run a property or method
// the wrapper basically create String Object using new('Hello World')

x = s.length;

x = s[0];
// getting the last index
x = s[-1];
// undefined if index out of bound and not error
x = s.at(-12);

// this is accessible only if variable is created with new String
x = s.__porto__;

// HELLO WORLD
x = s.toUpperCase();
// hello world
x = s.toLowerCase();

// H
x = s.charAt(0);
// negative doesn't work with charAt
x = s.charAt(-1);

// give the index of first match
x = s.indexOf('e');

// Hell (start,end) => from start to one less than end
x = s.substring(0, 4);
// Hello
x = s.substring(0, 4);
// llo
x = s.substring(2, 5);
// Hello World from 0 to rest
x = s.substring(0);
// World from 6 till end
x = s.substring(6);

// Hell
x = s.slice(0, 4);
// with slice we can start from negative
// World
x = s.slice(-5);
// Wo
x = s.slice(-5, -3);
// Hello World
x = s.slice(-11);
// Hello
x = s.slice(-11, -6);

//     Hello World
x = '    Hello World    ';
// Hello World
x = s.trim();

// Hello John
x = s.replace('World', 'John');

// true
x = s.includes('Hello');
// true
x = s.includes('Hell');
// false
x = s.includes('Helli');

// Returns the primitive value of the specified object.
// Hello World
x = s.valueOf();

// (2) ['Hello', 'World']
x = s.split(' ');
// (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
x = s.split('');

console.log(x);
