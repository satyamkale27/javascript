
// function one(call_two) {
// console.log(" step one compleated call step 2");
// call_two();
// };

// function two() {
//     console.log(" step 2 ");
// };

// one(two);

// arrow function and call bacck //
let order = (call_production) => {
console.log(" order placed, please call the production");
call_production();

};

let production = () => {
console.log("order received, starting production");
};

order(production);