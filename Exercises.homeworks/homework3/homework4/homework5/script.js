function fun(Arr) {
  let sum = 0;
  for (i = 0; i < Arr.length; i++) {
    sum += Arr[i];
  }

  let minValue = Math.min(...Arr); // the spread operatorot ni dozvoluva da ja rasirime nizata, Math min/max ne se spravuvaat so niza bidejki tie ocekuvaat lista od broevi
  let maxValue = Math.max(...Arr);
  console.log("Min element is: " + minValue);
  console.log("Max Element is: " + maxValue);
  console.log("The sum is: " + sum);
}

let myArray = [50, 60, 100, 10, 40];
fun(myArray);
