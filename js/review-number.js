var a = 5;
var b = 4;
var sum = a + b;
console.log(a + b);

//difference
var c = 5;
var d = 5;
var diff = c - d;
console.log(c - d);

//multiplication
var e = 5;
var f = 5;
var mul = e * f;
console.log(e * f);

//division
var g = 5;
var h = 5;
console.log(5 / 5);

//modules
var i = 25;
var h = 4;
var mod = i % h;
console.log(i % h);




//review-strings
var str1 = 'hello world!';
console.log(str1);

//accessing only the first word of the above string
var str2 = str1.split(' ');
console.log(str2);
console.log(str2[0]);
console.log(str2[1].split('!') [0]);




//chartAt

console.log(str1.charAt(0));
//the above targets only the first letter of the above string
console.log(str1.charAt(str1.length - 1));


//substring
console.log(str1.substring(0)); //gives all the string bcuz we did not give it an ending
console.log(str1.substring(0,2)); //it only gives us 'he' from word hello bcuz we said index 0-2. up to index 2, but not including the letter in index 2.

//substr
console.log(str1.substr(0));
console.log(str1.substr(0, 6));

console.log(str1.substr(6, str1.length -1));
//whats inside the () indicate is that the only thing that will be consoled is World! bcuz the W is in the 6th place and from there it gives you everything up to that. if i had something else after the !; then everything after the ! would be consoled aswell.


//text transform to upper case
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

var fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

fruits.push('blueberry');
console.log(fruits);

console.log(Array.isArray(fruits));


//review-object

var fullName = {
    firstName: 'griselda',
    lastName: 'alvarez'
};
console.log(fullName);
console.log(fullName.firstName);
console.log(fullName.lastName);

console.log(fullName.firstName.concat(' ', fullName.lastName));


//
