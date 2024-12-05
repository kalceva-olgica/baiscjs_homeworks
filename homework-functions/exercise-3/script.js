function calculateAge(birthYear, currentYear) {
  let age = currentYear - birthYear;
  console.log(`You are ${age} years old !!`);
}

calculateAge(1967, 2024);
calculateAge(2002, 2024);
calculateAge(1998, 2024);

function ageWithCurrentYear(birthYear) {
  let currentYear = new Date().getFullYear();
  // za ova si pomognav od net poso ne znaev koj objekt se pisuva za presmetuvanje haha :)
  // ----------> new Date().getFullYear(); <----------
  let age = currentYear - birthYear;
  console.log(`You are ${age} years old :)`);
}

ageWithCurrentYear(2013);
