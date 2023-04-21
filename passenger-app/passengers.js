
 let countEl = document.getElementById("count-el")
 let strel = document.getElementById("entries")
 let count = 0
 
 function increment() {
    count = count + 1
     countEl.innerText = count
 }

 function save() {
    let countstrr = count + " - "
    strel.innerText = strel.innerText + countstrr
 }
