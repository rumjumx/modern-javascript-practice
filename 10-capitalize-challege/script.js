const myString = 'developer';
let myNewString;

// Solution 1:
myNewString = myString[0].toUpperCase() + myString.slice(1);

// Solution 2:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);
