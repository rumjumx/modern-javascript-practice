let x;
// 5 'number'
// const num = 5;
// Number {5} 'object'
const num = new Number(5);

// 5 string
x = num.toString();

// undefined 'undefined'
x = num.length;

// 1 'number'
x = num.toString().length;

// 5.00 string
x = num.toFixed(2);
x = new Number(5.427);
// 5.43 string
x = x.toFixed(2);
x = new Number(5.4527);
// 5.45 string
x = x.toFixed(2);

// 5.0 string
x = num.toPrecision(2);
x = new Number(5.427);
// 5.4 string
x = x.toPrecision(2);
x = new Number(5.4527);
// 5.5 string
x = x.toPrecision(2);
x = new Number(5.4527);
// 5.45 string
x = x.toPrecision(3);

// 5.00e+0 string
x = num.toExponential(2);

// https://www.scaler.com/topics/javascript-date-tolocalestring/
x = num.toLocaleString('hi-IN');
x = num.toLocaleString('en-IN');
x = num.toLocaleString('ta-IN');
x = num.toLocaleString('ru-RU');
x = num.toLocaleString('en-US');

// Returns the primitive value of the specified object
// 5 'number'
x = num.valueOf();
// 1.7976931348623157e+308 'number'
x = Number.MAX_VALUE;
// 5e-324 'number'
x = Number.MIN_VALUE;

console.log(x, typeof x);
console.log(num, typeof num);
