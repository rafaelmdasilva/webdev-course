'use strict'

let randomNum = Math.ceil(Math.random() * 5)
// console.log(`Cheat code: ${randomNum}`)

const resultsInput = document.querySelector('#results')

function getInput() {

    let userInput = document.querySelector('#numberInput').value;
    userInput = Number(userInput)

    if (userInput == 42 || userInput == 69) {
        resultsInput.innerHTML = 'Congrats, you got it! <br> (It will be our little secret)'
    } else {
        if (userInput > 5 || userInput == '') {
            resultsInput.innerText = 'Numbers 1 to 5 only'
        } else {
            if (userInput === randomNum) {
                resultsInput.innerText = 'Congrats, you got it!'
            } else {
                resultsInput.innerText = 'That wasn\'t it, try again.'
            }
        }
    }
}