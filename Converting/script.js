function convertToWords() {
  const numberInput = document.getElementById("numberInput").value;
  const words = document.getElementById("words");

  if (numberInput === "") {
    words.textContent = "Words will appear here...";
    return;
  }

  const number = parseInt(numberInput, 10);
  if (isNaN(number)) {
    words.textContent = "Oops invalid value :)";
    return;
  }

  words.textContent = numberToWords(number);
}

function numberToWords(num) {
  if (num === 0) return "zero"; // ako vnesime 0 neka ni vrati zero

  const firstNumbers = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const secondNumbers = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const thousands = ["", "thousand", "million", "billion"];

  function myFun(number) {
    if (number === 0) return ""; // ovde vrakjam prazen string bidejki broevite sto sozdrzat 0 ex(150,3000) imaat 0 a nulite ne sakame da gi citame tuku treba da ni vrati 150(one hundred fifty)
    if (number < 20) return firstNumbers[number] + " "; // ovde ni vrakja broj od nizata od1-19 ako e pomal od 20 ex.firstNumbers[11] = eleven
    if (number < 100)
      return secondNumbers[Math.floor(number / 10)] + " " + myFun(number % 10);
    return (
      firstNumbers[Math.floor(number / 100)] + " hundred " + myFun(number % 100)
    );
  }

  let result = "";
  let i = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = myFun(num % 1000) + thousands[i] + " " + result;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return result.trim();
}
