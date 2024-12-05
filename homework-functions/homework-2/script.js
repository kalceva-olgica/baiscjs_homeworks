function calculateDogAge(age, toHumanYears = false) {
  // ako ovde ne stavime default false ke frli error bidejki ke bide undefined, a taka ke bide po stadard false ako ne vnesime vrednost i nema da imame greska vo kodot

  if (toHumanYears) {
    let humanAge = age * 7;
    console.log(`The dog's age in human years is: ${humanAge}`);
    return humanAge;
  } else {
    const dogAge = age / 7;
    console.log(`The human's age in dog years is: ${dogAge.toFixed(2)}`); // ovde koristam toFixed bidejki sakam da mi vrati decimalen broj
    // a bez toa ke mi vrati poveke brojki odnosno pogolem decimal(podolg)
    return dogAge;
  }
}

calculateDogAge(10); // godini na covekot vo godini na kuce
calculateDogAge(70, true); // obratno

// ne sum sigurna dali pravilno ja resiv bidejki pred da stavam toHumanYears = false mi frlase error celo vreme, mislam deka e vo red :)
