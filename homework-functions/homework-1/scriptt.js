function myFunction(parameter) {
  let type = typeof parameter;
  console.log(`The type of this parameter is: ${type}`);
  return type;
}

myFunction({}); // ova ni vrakja object
myFunction(true); // ovde vrakja boolean (true or false)
myFunction(42); // ova vrakja brojce
myFunction("my parameter"); // ova ni vrakja string
myFunction(undefined); // ova ni e undefined
