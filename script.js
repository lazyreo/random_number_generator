
const minVal = document.getElementById("MinimumValue");
const maxVal = document.getElementById("MaximumValue");
const guessNum = document.getElementById("GuessedNumber");
const guessBtn = document.getElementById("GuessBtn");
const resNum = document.getElementById("ResultNumber");
const resMessage = document.getElementById("ResultMessage");

let num;

minVal.oninput = function() {
    if (!Number.isFinite(minVal.valueAsNumber)) {
        minVal.value = 0;
    }
};

maxVal.oninput = function() {
    if (!Number.isFinite(maxVal.valueAsNumber)) {
        maxVal.value = 10;
    }
};

guessNum.oninput = function() {
    if (!Number.isFinite(guessNum.valueAsNumber)) {
        guessNum.value = 0;
    }
};

guessBtn.onclick = function() {

    const min = minVal.valueAsNumber;
    const max = maxVal.valueAsNumber;
    const guess = guessNum.valueAsNumber;

    if (min > max) {
        resMessage.textContent = "Minimum value cannot exceed maximum value!";
        return;
    }

    if (!Number.isFinite(min) || !Number.isFinite(max) ||
        !Number.isFinite(guess)) {
        resMessage.textContent = "Please enter valid numbers!";
        return;
    }

    if (guess < min || guess > max) {
        resMessage.textContent = "Your guess is outside the range!";
        return;
    }

    num = Math.floor(Math.random() * (max - min + 1)) + min;

    resNum.textContent = `The correct number was: ${num}`;

    resMessage.textContent = (guess === num)
        ? "You've guessed it right!!🥳🙌\nHere's a cookie 🍪"
        : "Aww, you've got it wrong 🙁\nWanna try again? 😁";
};
