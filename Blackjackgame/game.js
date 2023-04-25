let fristcard = 10
let secondcard = 11
let sum = fristcard + secondcard
let hasblackjack = false    // this is boolean type value learned in this project //
let isalive = true
let message = ""
function startgame() {
if(sum < 22) {
    message = "Do you want to draw a new card"
} else if(sum === 2){
message = "wohoo ! you got Blackjack"
hasblackjack = true
}
else{
    message = "you are out of game"
    isalive = false
}
console.log(message)
}
