"use strict";

let secretNumber = Math.trunc(Math.random() *20 +1);
let highscore = 0;
score = 20;
document.querySelector('.check').addEventListener
('click' , function () {
    const guess = Number(document.querySelector('.guess').value)
    
    if (!guess) {
        document.querySelector('message').textContent = "⛔️ No number!";
    } else if (guess > secretNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = " 📈 Too high!";
            document.querySelector('.score').textContent = score
            score--;
        } else {
            document.querySelector(".message").textContent =
              "💥 You lost the game!";
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low!";  
            score--;
        } else {
          document.querySelector(".message").textContent =
            "💥 You lost the game!";
        }
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector("body").style.backgroundColor = " #60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    } else {
        document.querySelector(".message").textContent = 
            "💥 You lost the game!";
    }
})

document.querySelector('.again').addEventListener
    ('click', function () {
        // score = 20;
        secretNumber = Math.trunc(Math.random() * 20 + 1);

        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = "?";
        document.querySelector('.message').textContent = "Start Guessing..."

        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";

        document.querySelector(".guess").value = "";
     
    });