function mydata(name, age) {

return {
name: name,
age: age,

};

};

let el = mydata("name", 19);
console.log(el.name);
console.log(el.age);

// Instead of name:name we can just write name, like this
// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
//   }