/**
 * Primitive Data Types
 * String - Sequence of characters. Must be in quote or backticks
 * Number - Integers as well as floating-point numbers
 * Boolean - Logical entity / true or false
 * Null - Intention absence of any object value
 * Undefined - A Variable that has not yet been defined / assigned
 * Symbol - Built-in object whose constructor returns a unique symbol
 * BigInt - Numbers that are greater than the "Number" type can handle
 */

/**
 * Javascript is a dynamically-typed language
 *
 */

// string type
const firstName = 'Sara';
// Sara string
console.log(firstName, typeof firstName);

// Number
const age = 30;
const temp = 98.9;
// 30 'number'
console.log(age, typeof age);
// 98.9 'number'
console.log(temp, typeof temp);

// Boolean
const hasKids = true;
// true 'boolean'
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
// null 'object'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
console.log(aptNumber, typeof aptNumber);

// Undefined
let score;
const winner = undefined;
// undefined 'undefined'
console.log(score, typeof score);
// undefined 'undefined'
console.log(winner, typeof winner);

// Symbol
const id = Symbol('id');
// Symbol(id) 'symbol'
console.log(id, typeof id);

// BigInt
const n = 9007199257444444n;
const x = 5n;
// 9007199257444444n 'bigint'
console.log(n, typeof n);
// 5n 'bigint'
console.log(x, typeof x);

/**
 * Reference Types (Objects)
 * Object Literals, arrays and functions are all reference types
 *
 */

const numbers = [1, 2, 3, 4];
// [1, 2, 3, 4] 'object'
console.log(numbers, typeof numbers);

const person = {
  name: 'Brad',
};
// {name: 'Brad'} 'object'
console.log(person, typeof person);

function sayHello() {
  console.log('Hello');
}
// ƒ sayHello() { console.log('Hello'); } 'function'
console.log(sayHello, typeof sayHello);
