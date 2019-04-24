//array data type. defined by square braquets

var  arr1 = []; //empty array
var arr2 = [1, 2]; // array has 2 elements within
console.log(arr2);
console.log(arr2[1]); //index (place) 1

var arr3 = ['hi', 'hello', 'there'];
console.log(arr3);
console.log(arr3[2]);
console.log(arr3.length); //gives the length of array
console.log(arr3[arr3.length - 1]); //must subtract 1 because it's zero base

arr3.push('welcome'); //push inserts at end of array
console.log(arr3);

arr3.unshift('greeting'); //unshift inserts at the beginning of array
console.log(arr3);

arr3.splice(2, 1, 'Griselda'); // splice moved position 2 word hello and the 1 states i only want to remove 1 item and replace with Griselda
console.log(arr3);

arr3.splice(2, 2); //removes 2 items beginning at index 2
console.log(arr3);

arr3.splice(2, 2, 'griselda', 'alvarez'); //removes 2 items beginning in index 2 and replaces 'griselda' and 'alvarez' in index 2 and 3
console.log(arr3);

arr3.splice(2, 0, 'hola'); //add item after index 2 with 0 items deleted
console.log(arr3);

var arr4 = [10, 40, 'abc', 'xyz'];
console.log(arr4);

arr4.pop(); //removes last item of arr4

arr4.shift(); //removes first item of arr4
console.log(arr4);

var arr5 = arr4.slice();
console.log(arr5);
var arr6 = arr4; //this is  not a copy. it is exact value

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1, 3); //starts at index 1, captures everything before index 3
console.log(arr7);