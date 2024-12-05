//if
// let score = 75;
// if (score > 100) {
//   console.log("Score is greater than 100");
// }
//else
// let points = 51;
// if (points > 60) {
//   console.log("The students has passed the exam");
//   console.log(`The score is ${points}`);
// } else {
//   console.log("The student failed the exam");
//   let myNumber = 10;
//   console.log("My number is ", myNumber);
// }

//nestef if

// let age = 20;
// let hadId = true;

// if (age >= 18) {
//   if (hadId) {
//     console.log("You can enter the club");
//   } else {
//     console.log("You need an ID to enter the club");
//   }
// } else {
//   console.log("You cannot enter the club");
// }

//nested if else with prompts

// let myAge = prompt("Enter your age.");
// console.log(myAge);
// let haveId = prompt.apply("Do you have an Id? yes/no");
// console.log(haveId);
// if(myAge >= 18){
//     if(haveId === "yes"){
//         console.log("You can enter the club");
//     } else {
//         console.log("You need an Id");
//     }
// } else {
//     console.log("You are not old enough");
// }

//switchcase

// let input = parseInt(prompt("Enter a number from 1 to 7"));
// let parseInput = parseInt(input);

// switch (input) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid number");
// }

// switch (input) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Working day");
//     break;
//   case 6:
//   case 7:
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Invalid input");
// }

// function greeting() {
//   console.log("Welcome back");
// }
// greeting();

// function greetUser(firstName, lastName) {
//   console.log(`hello, welcome back ${firstName} ${lastName}`);
// }

// greetUser("John", "Doe");

// function sum(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return "Division by zero is not allowed.";
//   }
//   return a / b;
// }

// console.log("Sum:", sum(10, 10));
// console.log("Substraction:", subtract(10, 7));
// console.log("Multiply:", multiply(8, 5));
// console.log("Divide:", divide(10, 5));

// function firstConvert(celsius) {
//   let result = celsius * 1.8 + 32;
//   return result;
// }

// console.log("Convert:", firstConvert(10));

// function secondConvert(fahrenheit) {
//   let result = (5 / 9) * (fahrenheit - 32);
//   return result;
// }

// console.log("Convert:", secondConvert(10));

function drugPrimerFunkcija() {
  let bla = "askdjf";

  function vgnezdenaFunkcija() {
    let promenliva = null;
  }

  console.log(promenliva);
}

drugPrimerFunkcija();

let randomPromenliva = "bla";

function funkcija(a, b) {
  let sum = a + b;

  function drugaFunkcija(suma) {
    var zgolemenaSuma = suma + 1;

    function tretaFunkcija(bla) {
      akjsdfjkasd;
    }
    console.log(suma);
  }

  drugaFunkcija(sum);
}

// funkcija(3, 5);
