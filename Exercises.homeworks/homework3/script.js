function myArray(stringsArray) {
  let result = stringsArray.join(" "); // metodot join direktno ni se spravuva so rastojanieto kako prazno mesto ili zapirki
  console.log(`The whole string (sentence) is string is: "${result}"`);
  return result;
}

let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
myArray(stringArray);

// iako ima premnogu nacini da se resi zadacata ja poednostaviv so join metodot bidejki mu ja nauciv namenata :D


