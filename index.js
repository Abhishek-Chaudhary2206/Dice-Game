let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "inline-block"
}

rollBtn.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random()*6)+1
    if (player1Turn) {
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
    } else {
       player2Dice.textContent = randomNumber
       player2Dice.classList.remove("active")
       player1Dice.classList.add("active")
       message.textContent = "Player 1 Turn"
       player2Score += randomNumber
       player2Scoreboard.textContent = player2Score
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        showDisplayButton()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🎉"
        showDisplayButton()
    }

    player1Turn = !player1Turn
    
})

function reset(){
    message.textContent = "Player 1 Turn"
    player1Score = 0
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = "-"
    player2Score = 0
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = "-"
    rollBtn.style.display = "inline-block"
    resetBtn.style.display = "none"
    player1Turn = true
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")

}

resetBtn.addEventListener("click", function(){
    reset()
})