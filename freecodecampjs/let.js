// re declaring in let is not allowed  //
// let city = "navi mumbai";
// let city;
// it will not work //

// redeclaring in another block is allowed //
let x = 2;   // Allowed

{
let x = 3;   // Allowed
console.log(x);
// answer is 3 //
}

{
let x = 4;    // Allowed
console.log(x);
// answer is 4 //
}
console.log(x);
// answer is 2//