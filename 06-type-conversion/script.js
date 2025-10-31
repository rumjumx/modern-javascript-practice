// let amount = '100';
// change string to number
// 100 'number'
// amount = parseInt(amount);
// 100 'number'
// amount = +amount;
// amount = Number(amount);

// let amount = 100;
// the primitive type doesn't have have toString method
// javascript creates a temporary wrapper of the associated type
// Change number to string
// 100 string
// amount = amount.toString();
// amount = String(amount);

// let amount = '99.5';
// Convert string to decimal
// 99.5 'number'
// amount = parseFloat(amount);
// 99 'number'
// amount = parseInt(amount);

// Convert number to boolean
// let amount = 1;
// true 'boolean'
// amount = Boolean(amount);
// amount = 0;
// false 'boolean'
// amount = Boolean(amount);

// special kind of number NaN
let amount = 'hello';
// NaN 'number'
amount = parseInt(amount);
// NaN 'number'
amount = Number(amount);
// NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('f00' / 3);

console.log(amount, typeof amount);
