const numbers = [7, 15, 22, 5];
const numberList = document.getElementById("numberList");
const sumResult = document.getElementById("sumResult");
const equation = document.getElementById("equation");

let sum = 0;
let equationString = "";

for (let i = 0; i < numbers.length; i++) {
  const li = document.createElement("li"); // ovde kreirame list item <li> i go cuvame vo "li" variabla
  li.textContent = numbers[i]; // ovde dodavame tekst vo li odnosno ako numbers[i] = 3 togas toa e <li>3</li>
  numberList.appendChild(li); // ovde dodavame li na numberList kaj <ul> odnosno toa bi bilo <ul><li>3</li></ul>

  sum += numbers[i]; // go dodavame moomentalniot broj na sumatra

  equationString += numbers[i]; //
  if (i < numbers.length - 1) {
    // ovde proveruvame dali sme na posledniot broj od nizata
    equationString += " + "; // ovde dodavam + megju broevite
  }
}

equationString += ` = ${sum}`; // ovde dodavam equation na sumata

sumResult.textContent = `Sum: ${sum}`;

equation.textContent = equationString;
