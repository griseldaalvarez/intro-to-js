//user object:
// var user = {
//     name: 'griselda',
//     hp: 50,
// };

// console.log(user);

var users = [];
// users.push(user);
// console.log(users);
var userCount = 5;



// while (users.length <= userCount) {
//     var user = {};
//     user.name = prompt('Enter user name: ');
//     user.hp = prompt('Enter user hp: ');
//     users.push(user);
// }

// ABOVE COMMENTEDO OUT AND BELOW ARE THE SAME JUST IN DIFFERENT WAYS

for (var 1 = 0; i < userCount; i++){
    var user = {};
    // diy; add validation on these prompts
    user.name = prompt('Enter user name: ');
    user.hp = prompt('Enter user hp: ');
    users.push(user);  
}

console.log(user);

// output each user to console