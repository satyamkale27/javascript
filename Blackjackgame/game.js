let instructionEl = document.getElementById("instruction")
let sumEl = document.getElementById("summ")
let cardEl = document.getElementById("cardcount")

let fristcard = 10
let secondcard = 4
let cardss = [fristcard, secondcard]
let sum = fristcard + secondcard
let hasblackjack = false    // this is boolean type value learned in this project //
let isalive = true
let message = ""
let values = 0
console.log(cardss)

function startgame() {
    rendergame()
}

function rendergame() {
    cardEl.textContent = cardss



    sumEl.textContent = "sum:" + sum
    if(sum < 20) {
        message = "Do you want to draw a new card ?"
    } else if(sum === 21){
    message = "wohoo ! you got Blackjack"
    hasblackjack = true
    }
    else{
        message = "you are out of game"
        isalive = false
    }
    instructionEl.textContent = message
    //  cardEl.textContent = "cards:" + cardss[0] + " " + cardss[1]
    
}

function newcard() {
    let card = 7
    sum = sum + card
    cardss.push(card)
    values = values + 1
    console.log(values)
      rendergame()
}
