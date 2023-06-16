// main intention is to learn return value in the function //
function check(age) {
if(age >= 18) {
return true;
} else {
 return confirm('do you have parents permission');
}

}
let age = prompt('how old are you', 18);

if( check(age) ) {
alert("permission granted");
} else {
    alert("permission denied");
}