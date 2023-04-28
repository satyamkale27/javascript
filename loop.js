

let sentence = ["hello", "my","name", "is", "per"]
let greetingEl = document.getElementById("loops")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "  // + " " is used to add space between the elements of array //
}