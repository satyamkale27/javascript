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
 // console.log(loc);  // output is error //


 // outer variable //
 let usernamee = "namee"; // it is outer variable //
 function names() {
    console.log(usernamee);
 }
 names(); // output namee //
 console.log(usernamee);  // output namee //

 // parameter in a function //

 function showwmess(form, text) {
    console.log(form + ' : ' + text);
 }
 showwmess('ann', 'hello!'); // we have passed parameters to function // and also called //
 // when value is passe into function it is called argument //
 // If a function is called, but an argument is not provided, then the corresponding value becomes undefined.//

