
const userInput = document.querySelector(".guess-number");
const form = document.querySelector("form");
const resultOutput = document.querySelector(".result-output");
const wrongInput = document.querySelector(".wrong-input");
const userGuesses = document.querySelector(".user-guesses");
const yourAttempt = document.querySelector(".your-attempt");
const startGameBtn = document.querySelector(".start-game");
const submitBtn = document.querySelector(".submit");



//  creating a IIFE (Immediately Invoked Function Expression) called as a() to hide the randomNumber from console

function a() {

    let randomNumber = Math.round(Math.random() * 100);

    let yourGuessArray = [];

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInputValue = parseInt(userInput.value);

        if (userInputValue < 0 || userInputValue > 100) {
            wrongInput.style.display = "block";
            wrongInput.innerText = "Please enter a number between 0 and 100";
            setTimeout(() => {
                wrongInput.style.display = "none";
            }, 3000);
        } else { };


        if (userInputValue > randomNumber) {
            resultOutput.innerText = "To High!";
        }
        else if (userInputValue < randomNumber) {
            resultOutput.innerText = "To Low!";
        }
        else {
            resultOutput.innerText = "Congrats!!";
            startGameBtn.disabled = false;
            submitBtn.disabled = true;

        };

        // userInput.value = "";
        form.reset();
        yourGuessArray.push(userInputValue);
        userGuesses.innerText = `Your Guesses: ${yourGuessArray.join(", ")}`;
        yourAttempt.innerText = `Total Attempt: ${yourGuessArray.length}`;
    });


    startGameBtn.addEventListener("click", (e) => {
        // location.reload();

        randomNumber = Math.round(Math.random() * 100);
        yourGuessArray = [];
        resultOutput.innerText = "";
        userGuesses.innerText = "";
        yourAttempt.innerText = "";
        startGameBtn.disabled = true;
        submitBtn.disabled = false;
    });

};

a();
