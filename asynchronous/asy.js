
function one(call_two) {
console.log(" step one compleated call step 2");
call_two();
};

function two() {
    console.log(" step 2 ");
};

one(two);

