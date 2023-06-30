// As we already know,
// a variable cannot have a name equal to one of the language-reserved words like “for”, 
// “let”, “return” etc.

let obj = {
    for: 1,
    if: 2,
    return: 6
};
console.log(obj.for + obj.if + obj.return); // answer is  9 //
