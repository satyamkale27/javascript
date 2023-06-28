// objects in c //
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,        // by key "age" store value 30
};
console.log( user.name );
console.log( user.age );

// We can also use multiword property names, but then they must be quoted:
let per = {
preson: "smith",
time: 5,
"likes birds": true  // multiword property name must be quoted
};

console.log(per["likes birds"]);