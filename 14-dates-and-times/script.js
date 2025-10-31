let d;

// Fri Oct 31 2025 22:18:16 GMT+0530 (India Standard Time) 'object'
d = new Date();

// Fri Oct 31 2025 22:18:44 GMT+0530 (India Standard Time) string
x = d.toString();

// Fri Oct 31 2025 string
x = d.toDateString();

// Fri Jan 10 2025 00:00:00 GMT+0530 (India Standard Time) 'object'
// while passing as argument the month is zero based
d = new Date(2025, 0, 10);

// Fri Jan 10 2025 12:30:00 GMT+0530 (India Standard Time) 'object'
d = new Date(2025, 0, 10, 12, 30, 0);

// Sun Jan 10 2021 05:30:00 GMT+0530 (India Standard Time) 'object'
// while passing as string the month is not zero based
d = new Date('2021-01-10');

// Sun Jan 10 2021 12:30:00 GMT+0530 (India Standard Time) 'object'
d = new Date('2021-01-10T12:30:00');

// Sun Jan 10 2021 12:30:00 GMT+0530 (India Standard Time) 'object'
d = new Date('01/10/2021 12:30:00');

// Thu Jul 15 2021 12:30:00 GMT+0530 (India Standard Time) 'object'
d = new Date('07/15/2021 12:30:00');

//Sun Jul 10 2022 05:30:00 GMT+0530 (India Standard Time) 'object'
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
// Sometime this me be of due to time zone
d = new Date('2022-07-10');

// linux timestamp
// 1761929969465
d = Date.now();

// Sun Jul 10 2022 12:30:00 GMT+0530 (India Standard Time) 'object'
d = new Date('07-10-2022 12:30:00');
// 1657436400000 exact timestamp for the above date
// 1657436400000 'number'
d = d.getTime();
// 1657436400000 'number'
d = d.valueOf();

// timestamp to date
// Sun Jul 10 2022 12:30:00 GMT+0530 (India Standard Time) 'object'
d = new Date(1657436400000);
// 1657436400000 'number'
d = d.valueOf();

// getting timestamp in seccond as 1 sec is euqal to 1000ms
d = Math.floor(Date.now() / 1000);

console.log(x, typeof x);
console.log(d, typeof d);
