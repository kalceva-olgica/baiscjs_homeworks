const year = parseInt(
  prompt("Enter a year to find your chinese zodiac sign:"), // ovde staviv 10 kaja parsteInt za da bideme sigurni deka vlezot ke bide tretiran kako decimalen(radix)
  10
); 
if (!isNaN(year)) {
  // so ova proveruvam ako vnesenoto ne e broj tuku nesto drugo da ne prodolzi ponatamu
  let zodiacCalculation = (year - 4) % 12;
  if (zodiacCalculation < 0) {
    zodiacCalculation = zodiacCalculation + 12; // bez ova mi frlase error bidejki ako vnesam do 3 , mi vrakja negativen rezultat bidejki 3-4 e -1 etc.
    // odnosno zodiacCalculation = -1 + 12 = 11 pa zatoa ni treba i taa kalkulacija
  }

  let sign;
  switch (zodiacCalculation) {
    case 0:
      sign = "Rat";
      break;
    case 1:
      sign = "Ox";
      break;
    case 2:
      sign = "Tiger";
      break;
    case 3:
      sign = "Rabbit";
      break;
    case 4:
      sign = "Dragon";
      break;
    case 5:
      sign = "Snake";
      break;
    case 6:
      sign = "Horse";
      break;
    case 7:
      sign = "Goat";
      break;
    case 8:
      sign = "Monkey";
      break;
    case 9:
      sign = "Rooster";
      break;
    case 10:
      sign = "Dog";
      break;
    case 11:
      sign = "Pig";
      break;
    default:
      sign = "Something unknown";
  }

  alert(`This year --> ${year} is the year of ${sign}.`);
} else {
  alert("Please enter a valid year.");
}
