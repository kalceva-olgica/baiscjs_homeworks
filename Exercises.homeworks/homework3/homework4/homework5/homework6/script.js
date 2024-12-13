function getFullNames(firstNames, lastNames) {
  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
  }

  return fullNames;
}

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
let result = getFullNames(first, last);
console.log(result);
