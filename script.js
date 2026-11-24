const minVal = document.getElementById("MinimumValue");
const maxVal = document.getElementById("MaximumValue");
const guessNum = document.getElementById("GuessedNumber");
const gameForm = document.getElementById("gameForm");
const guessBtn = document.getElementById("GuessBtn");
const playAgainBtn = document.getElementById("PlayAgainBtn");
const resNum = document.getElementById("ResultNumber");
const resMessage = document.getElementById("ResultMessage");

function clearResults() {
    resNum.textContent = "";
    resMessage.textContent = "";
    resMessage.classList.remove("result-message--error", "result-message--success");
}

function showError(message) {
    resNum.textContent = "";
    resMessage.textContent = message;
    resMessage.classList.remove("result-message--success");
    resMessage.classList.add("result-message--error");
    playAgainBtn.hidden = true;
}

function playRound() {
    const min = minVal.valueAsNumber;
    const max = maxVal.valueAsNumber;
    const guess = guessNum.valueAsNumber;

    if (!Number.isFinite(min) || !Number.isFinite(max) || !Number.isFinite(guess)) {
        showError("Please enter valid numbers in every field.");
        return;
    }

    if (min > max) {
        showError("Minimum value cannot exceed maximum value!");
        return;
    }

    if (guess < min || guess > max) {
        showError("Your guess is outside the range!");
        return;
    }

    const rolled = Math.floor(Math.random() * (max - min + 1)) + min;
    const won = guess === rolled;

    resNum.textContent = `The correct number was: ${rolled}`;
    resMessage.textContent = won
        ? "You've guessed it right!!🥳🙌\nHere's a cookie 🍪"
        : "Aww, you've got it wrong 🙁\nWanna try again? 😁";
    resMessage.classList.remove("result-message--error");
    resMessage.classList.add(won ? "result-message--success" : "result-message--neutral");

    playAgainBtn.hidden = false;
}

gameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearResults();
    playRound();
});

playAgainBtn.addEventListener("click", () => {
    clearResults();
    guessNum.value = "";
    guessNum.focus();
    playAgainBtn.hidden = true;
});