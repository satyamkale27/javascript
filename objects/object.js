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
// set get delete users //

let learn = {};
// set 
 learn["science"] = true; // stored boolean 
learn["flower rose"] = 'smell';
// get 
console.log(learn["flower rose"]);
console.log(learn["science"]);
 // delete
// delete learn["science"];  it deletes the learn["science"]; 