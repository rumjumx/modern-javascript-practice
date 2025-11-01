// Challenge 1
const arr = [1, 2, 3, 4, 5];
// expected result is [6,5,4,3,2,1,0]

arr.push(6);
arr.unshift(0);
arr.reverse();
// (7) [6, 5, 4, 3, 2, 1, 0]
console.log(arr);

// Challenge 2
// Combine arr1 & arr2 into a new array called arr3 with the following elements

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Get rid of the duplicate 5
// Expected Result:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr3 = [...arr1, ...arr2];
let index = arr3.indexOf(5);

// Remove the duplicate element using its index
arr3.splice(index, 1);

console.log(index, arr3);
