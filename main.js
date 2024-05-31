// Joshua Phillips
// 5/31/24
// JS Random Number Guess Game 

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Locate specific elements in theweb page using querySelector ( ) method
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congradulations! You guessed the mystery number!";
        lastResult.Style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backGroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Lest guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton); 
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetParas of resetParas) {
        resetParas.textContent = "";
    }


resetButton.parentNode.removeChild(resetButton);

guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = "";
guessField.focus();

lastResult.style.backgroundColor = "white";

randomNumber = Math.floor(Math.random() * 100) + 1;
}