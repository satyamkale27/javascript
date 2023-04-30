let instructionEl = document.getElementById("instruction")
let sumEl = document.getElementById("summ")
let cardEl = document.getElementById("cardcount")

let sum 
let cardss = []
let hasblackjack = false    // this is boolean type value learned in this project //
let isalive = false
let message = ""
let values = 0
console.log(cardss)

function randomnumber() {
    let randomnums =  Math.floor( Math.random() * 13) + 1
    if( randomnums > 10) {
        return 10
    }
    else if( randomnums === 1) {
     return 1
    }
    else {
        return randomnums
    }
}

function startgame() {
    let fristcard = randomnumber()
    let secondcard = randomnumber()
    cardss = [fristcard, secondcard]
    let sum = fristcard + secondcard
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
    
    
}

function newcard() {
    let card = randomnumber()
    sum = sum + card
    cardss.push(card)
    values = values + 1
    console.log(values)
      rendergame()
}
