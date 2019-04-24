// number data types

var a = 10;
console.log(a);

var b = 100;
console.log(b);

var a = 20;
console.log(a);

var c = 0x1E;  //hex value of 30
console.log(c);

var d = 0.5;
console.log(d);


// addition
var sum = a + b;
console.log(sum);

// subtraction
var diff = d - c;
console.log(diff);

// multiplication
var times = a * d;
console.log(times);

// division
var div = a / d;
console.log(div);

// modulus  this gives the remainder
var mod = b % a;
console.log(mod);

var e = '20';  //not a number; rather a 'string'
console.log(typeof e); //returns in console the type of variable e (ie=string),not the num.5

console.log(a === e); //triple = is strict comparisson. a is a number, b is a string so it's not equal

console.log(a == e); //does not look at its type only its value. loose comparison. //known as truthy (half truth)