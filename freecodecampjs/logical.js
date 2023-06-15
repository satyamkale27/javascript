// it is logical operator (or) in js //
// if any one condition gets true it gets excuted //
let hour = 9;
if(hour < 10 || hour > 18) {
console.log("yes");
} else {
console.log("no");
}

// it is (and) logical operator in js //
let min = 12;
let hours = 50;
if(min < 19 && hour < 60) {
console.log("done");
} else{
    console.log("not");
}
// small quiz alert( null || 2 && 3 || 4 ); which will execute frist //
// The precedence of AND && is higher than ||, so it executes first.

// The result of 2 && 3 = 3, so the expression becomes:

// null || 3 || 4
// Now the result is the first truthy value: 3.