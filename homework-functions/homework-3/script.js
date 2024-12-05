function myAtm() {
  let accountBalance = 30000000;

  let withdrawAmount = parseFloat(
    prompt("Enter the amount to withdraw from your ATM:")
  ); // parseFloat bidejki vrakjame decimalna sumaa

  if (withdrawAmount > accountBalance) {
    console.log("Not enough money");
  } else if (withdrawAmount > 0) {
    accountBalance = accountBalance - withdrawAmount;
    console.log(
      `Amount withdrawn from your ATM: ${withdrawAmount}. Money left: ${accountBalance}`
    );
  } else {
    console.log("You entered inavlid amount");
  }
}

myAtm();
