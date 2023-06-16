// function in javascript //
function sayhi() {
    console.log("hii");
    
}
sayhi();
// local variable and outer variable //

function show() {
    let loc = 9; // this is local variable can be used only in function //
    console.log(loc);
}
show(); // output 9 //
 console.log(loc);  // output is error //
