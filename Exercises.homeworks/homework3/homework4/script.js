let output = "";

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    output += i + "\n";
  } else {
    output += i + " ";
  }
}

console.log(output);
