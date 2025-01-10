const words = {
  toys: ["teddybear", "doll", "robot", "car", "balls", "lego"],
  fruits: ["apple", "banana", "cherry", "grape", "orange"],
  animals: ["tiger", "elephant", "zebra", "giraffe", "lion"],
};

let selectedWord = "";
let guessedLetters = [];
let wrongGuesses = [];
let remainingTries = 6;

function startGame() {
  const category = document.getElementById("category-select").value;
  const categoryWords = words[category];

  selectedWord =
    categoryWords[Math.floor(Math.random() * categoryWords.length)];

  guessedLetters = [];
  wrongGuesses = [];
  remainingTries = 6;

  document.getElementById("message").textContent = "";
  document.getElementById("letter-input").value = "";
  document.querySelector(".word").textContent = "";

  displayWord();
  updateGuesses();
}

function displayWord() {
  let display = "";
  for (let letter of selectedWord) {
    if (guessedLetters.includes(letter)) {
      display += letter + " ";
    } else {
      display += "_ ";
    }
  }
  document.querySelector(".word").textContent = display.trim();
}


function updateGuesses() {
  document.getElementById("wrong-guesses").textContent =
    wrongGuesses.join(", ");
  document.getElementById("remaining-tries").textContent = remainingTries;
}


function guessLetter() {
  const input = document.getElementById("letter-input").value.toLowerCase();
  if (input === "" || input.length !== 1) {
    document.getElementById("message").textContent =
      "Please enter a valid letter.";
    return;
  }

  if (guessedLetters.includes(input) || wrongGuesses.includes(input)) {
    document.getElementById("message").textContent =
      "You already guessed that letter.";
    return;
  }

  if (selectedWord.includes(input)) {
    guessedLetters.push(input);
    document.getElementById("message").textContent = "Good guess!";
  } else {
    wrongGuesses.push(input);
    remainingTries--;
    document.getElementById("message").textContent = "Wrong guess!";
  }

  displayWord();
  updateGuesses();

  if (guessedLetters.length === [...new Set(selectedWord)].length) {
    document.getElementById("message").textContent =
      "Congratulations! You guessed the word!";
  }

  if (remainingTries === 0) {
    document.getElementById(
      "message"
    ).textContent = `Game over! The word was: ${selectedWord}`;
  }


  document.getElementById("letter-input").value = "";
  document.getElementById("letter-input").focus();
}


startGame();
