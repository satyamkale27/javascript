let summ1 = document.getElementById("sum1")
let summ2 = document.getElementById("sum2")
let resultEl = document.getElementById("result")
summ1 = 8
summ2 = 7
function add() {
    let results = summ1 + summ2
    resultEl.textContent = results
}

function substracts() {
    let results = summ1 - summ2
    resultEl.textContent = results
}

function multplies() {
    let results = summ1 * summ2
    resultEl.textContent = results
}
function divides() {
    let results = summ1 / summ2
    resultEl.textContent = results
}
