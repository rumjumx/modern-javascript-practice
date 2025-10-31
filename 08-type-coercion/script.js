let x;

// 55 string
x = 5 + '5';

// 10 'number'
x = 5 + Number('5');

// 25 'number'
x = 5 * '5';

// 5 'number'
x = 5 + null;

// 0 'number'
x = Number(null);

// 1 'number'
x = Number(true);
// 0 'number'
x = Number(false);

// 6 'number'
x = 5 + true;

// 5 'number'
x = 5 + false;

// NaN 'number'
x = 5 + undefined;

// NaN
console.log(Number(undefined));

console.log(x, typeof x);
