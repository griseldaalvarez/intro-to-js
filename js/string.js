// string data type
var str1 = 'It\s Tuesday today!';
console.log(str1);

var str2 = "we are leaning JS today.";
console.log(str2);





var firstName = 'Griselda'; //camelCase
console.log(firstName);

var last_name = "Alvarez"; //snake naming convention
console.log(last_name);


//different ways to concatinate a name

var fullName = firstName + last_name;
console.log(fullName); //this way has no space between name and last name

var fullName = firstName + ' ' + last_name;
console.log(fullName); //this does show space between name and last name by using ''

var fullName = firstName.concat(' ',last_name);
console.log(fullName);