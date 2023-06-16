// in this we will learn how to copy the function //
// and store it in the variable //
function sayhii() {
    console.log("hello");    // function //
}

let fun = sayhii;  // copy of the function //

fun();   // copied function gets executed //
sayhii(); // original function also gets executed //
