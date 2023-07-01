let user = {};
console.log( user.name === undefined); // true means "no such property"

// Reading a non-existing property just returns undefined. 
// So we can easily test whether the property exists:

// use can also use //

let smt = {
age: 19,
weight: 52
};
console.log("age" in smt ); // true smt.age exists  // 
console.log("height" in smt ); // false smt.height does not exists //
// tip:- use in property insted of using undefined //