let fristcard = 10
let secondcard = 11
let sum = fristcard + secondcard
let hasblackjack = false    // this is boolean type value learned in this project //
let isalive = true

if(sum < 22) {
    console.log("Do you want to draw a new card")
} else if(sum === 22){
console.log("wohoo ! you got Blackjack")
hasblackjack = true
}
else{
    console.log("you are out of game")
    isalive = false
}

