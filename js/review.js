//alert buttons

var userd = {}; //empty object
var name  = prompt ('enter name');
console.log(name);
console.log(!isNan(name));

if (name === '' || name === '' || parseInt(name) ){
    alert ('enter valid name')
} else {
    userd.name = name;
}

if (name && isNaN(anme)) {
    userd.name = name;
    var hp = prompt ('enter your hp: ');

    if (hp && !isNaN(parseInt(hp))){
        user.power = parseInt (hp);
    } else{
        alert('enter valid hp');
    }
 else{
    alert('Enter valid hp');
} 
 else {
    alert('Enter valid name');
}

//ternary
// (name === '' || name === ' ' parseInt (name))?
//     alert('Enter Valid Name'):
//     userd.name = name;