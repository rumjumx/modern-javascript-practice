// console.log(Math);

let x;

// 3
x = Math.sqrt(9);

// 5
x = Math.abs(5);
// 5
x = Math.abs(-5);
// 4.6
x = Math.abs(4.6);

// 6
x = Math.round(5.6);
// 5
x = Math.round(5.2);
// -5
x = Math.round(-5.2);
// -7
x = Math.round(-7.5);
// -8
x = Math.round(-7.6);

// 5
x = Math.ceil(4.2);

// 4
x = Math.floor(4.9);

// 2^3 = 8
x = Math.pow(2, 3);

// 1
x = Math.min(4, 5, 3, 1);
// 5
x = Math.max(4, 5, 3, 1);

// random decimal between 0-1
x = Math.random();

// decimal between 0-9
x = Math.random() * 10;

// decimal between 1-10
x = Math.random() * 10 + 1;

// to get exactly between 1-10
x = Math.floor(Math.random() * 10 + 1);

// to get exactly between 1-100
x = Math.floor(Math.random() * 10 + 1);

console.log(x);
