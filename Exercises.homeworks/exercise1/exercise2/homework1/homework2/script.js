function fun(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function validateNumber(array) {
  for (j = 0; j < array.length; j++) {
    if (isNaN(array[j])) {
      console.log(`Error not a number found`);
      break;
    }
  }
  return myArray;
}

let myArray = [2, 3, 4, 5, 6]; // rezultat e 20
//let myArray = [2, 3, 4, "f", 6];  rezultat ni vrakja "Error not a number found"

validateNumber(myArray);
let result = fun(myArray);
console.log("The result is : ", result);

// function fun(array) {
//   let sum = 0;
//   for (i = 0; i < array.length; i++) {
//     if (isNaN(array[i])) {
//       console.log("Error");
//       break;
//     } else {
//       sum += array[i];
//     }
//   }
//   return sum;
// }
// let myArray = [2, 3, 4, "a", 6];
// let result = fun(myArray);
// console.log("The result is : ", result);

//vtorata zadaca e kako moze da se resi isto bez vtora funkcija :)
