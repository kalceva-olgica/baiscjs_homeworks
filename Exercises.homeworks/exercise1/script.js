function findNumber(number, array) {
  let occurences = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === number) {
      occurences++;
    }
  }
  return occurences;
}

let inputUser = parseInt(prompt("Enter your number:"));
let myFirstArray = [3, 4, 3, 2, 3, 8, 6, 4, 1, 9];
console.log(
  `There are ${findNumber(inputUser, myFirstArray )} occurences of ${inputUser} in the array!`
);

let mySacondArray = [3, 4, 3, 6, 3, 8, 8, 3, 1, 9];

console.log(
  `There are ${findNumber(
    inputUser,
    mySacondArray
  )} occurences of ${inputUser} in the array!`
);

let myThirdArray = [3, 4, 3, 2, 3, 8, 6, 4, 1, 9];

console.log(
  `There are ${findNumber(
    inputUser,
    myThirdArray
  )} occurences of ${inputUser} in the array!`
);

