/*
Write a function named findNumber that:
Takes 2 arguments: array, type
The person that calls the function should provide an array of numbers and string odd / even
If the type is even the function should find all the even numbers and return them as result
If the type is odd the function should find all the odd numbers and return them as result
Time to accomplish: 20 minutes.
*/

function findNumber(array, type) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (type === "even" && array[i] % 2 === 0) {
      result.push(array[i]);
    } else if (type === "odd" && array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;
} // zosto push metodot? Zatoa sto bez nego ne bi mozele da dodavame elementi na nizata result[], a so push metodot proveruvame dali e peren ili ne, i spored rezultatot si go dodava na nizata.

let numbers = [1, 7, 3, 4, 3, 1, 4, 8, 7, 12];

let evenNumbers = findNumber(numbers, "even"); // ni gi vrakja (4, 4, 8, 12)
console.log("Even numbers:", evenNumbers);

let oddNumbers = findNumber(numbers, "odd"); // ni gi vrakja (1, 7, 3, 3, 1, 7)
console.log("Odd numbers:", oddNumbers);
