let x;
const arr = [34, 55, 95, 20, 15];

// (6) [34, 55, 95, 20, 15, 100]
arr.push(100);

// (5) [34, 55, 95, 20, 15]
// pop removes the last item from the array
arr.pop();

// (6)[(135, 34, 55, 95, 20, 15)];
// insert the value to the beginning of the array
arr.unshift(135);

// shift returns undefined if array in empty
// shift removes the first index from the array
// (5) [34, 55, 95, 20, 15]
arr.shift();

// (5) [15, 20, 95, 55, 34]
// reverses the array
arr.reverse();

// returns true if exist and returns false if it doesn't exist
// false
x = arr.includes(5);
// true
x = arr.includes(20);

// returns the index of the element if available or else returns -1
// 4
x = arr.indexOf(34);
// -1, returns -1 if the element is not present in the array
x = arr.indexOf(99);

// return a copy of an array
// including the start index and one less than the end index
// slice(start?: number, end?: number)
// (5) [15, 20, 95, 55, 34], same as no start and end index is given
x = arr.slice();
// (5) [15, 20, 95, 55, 34] from index 0 to arr.length
x = arr.slice(0);
// (4) [15, 20, 95, 55]
x = arr.slice(0, 4);
// (4) [20, 95, 55, 34], from index 1 to arr.length
x = arr.slice(1);
// (3) [95, 55, 34], starting from index 2 to index 5 -1, i.e, 4
x = arr.slice(2, 5);
// [95, 55], starting from index 2 to index 3
x = arr.slice(2, 4);

// splice mutates the original array
let y = [0, 1, 2, 3, 4, 5, 6];

// @returns — An array containing the elements that were deleted.
// starting index and the number of element to delete
// (2) [0, 1], returns array of the deleted element
x = y.splice(0, 2);

// if only starting index is given then it deletes all the element
// (7) [0, 1, 2, 3, 4, 5, 6]
x = y.splice(0);
// here y is an empty array
// [];
console.log(y);

y = [0, 1, 2, 3, 4, 5, 6];

// removing element 6, i.e; last element which has an index of 6
y.splice(y.length - 1, 1);
// (6) [0, 1, 2, 3, 4, 5]
console.log(y);

// (5) [15, 20, 95, 55, 34]
console.log(arr);

// (4) [1, 2, 3, 4]
// x = y.splice(1, 4);

// Methods chaining
// 4
x = y.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
