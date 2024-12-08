let input = prompt("How much money do you have?");

if (input === null) {
  alert("You pressed Cancel.");
} else if (Number(input) === 2000) {
  alert("You can buy PS5 and go to theater");
} else if (Number(input) < 2000) {
  alert("You can go to theater and buy a cheap snack :P");
}
