let currentInput = ""; // ovde momentalniot input
let previousInput = ""; // a ovde go cuvam inputot sto veke sum go vnesilaa
let operator = ""; // ovde gi cuvam operatorite sto ke gi vnesi korisnikot

function clearDisplay() {
  // ovde gi brisam site vneseni inputi(i broj i operator)
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay("0");
}

function deleteLast() {
  // ovde go brisam samo posledniot vnesen broj(pogreska)
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    updateDisplay("0");
  } else {
    updateDisplay(currentInput);
  }
}

function appendNumber(number) {
  if (currentInput === "0" && number === "0") return;
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(op) {
  // ovde proveruvam ako currentIOnput mi e prazen ne pravi nisto ako ne izvrsuva kalkulacija so funckijata calculate()
  if (currentInput === "") return;
  if (previousInput !== "") {
    // a aovde ako veke imame input go presmetuvame
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result = 0;
  let prev = parseFloat(previousInput);
  let curr = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(curr)) return;

  if (operator === "+") {
    result = prev + curr;
  } else if (operator === "-") {
    result = prev - curr;
  } else if (operator === "*") {
    result = prev * curr;
  } else if (operator === "/") {
    if (curr === 0) {
      updateDisplay("Error");
      return;
    }
    result = prev / curr;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  const display = document.getElementById("display");
  display.textContent = value;
}

// odnosno:
// klikame broj 8, pa + , pa = :
// i ovde appentNumber ni e 8 i go stavam vo currentInput
// appentOperator(vo ovoj slucaj mi e +) , go stava 8 vo previousInput i operatorot na +
// vtoriot broj neka mi e 5, i currentInput mi e 5
// calculate() , presmetuvam 8 + 5 i vo currentInput go cuvam rezultatot (13)
