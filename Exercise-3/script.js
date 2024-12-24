document.getElementById("myButton").addEventListener("click", myForm);

function myForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const fullSentence = combiningAllValuesTogether(
    firstName,
    lastName,
    email,
    password
  );

  document.getElementById("allComplete").innerText = fullSentence;
}

function combiningAllValuesTogether(firstName, lastName, email, password) {
  return ` Your name is : ${firstName} ${lastName},  Your email is : ${email}, your password is : ${password}`;
}

// function registerUser() {
//   const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const fullSentence = `Your Name is: ${firstName} ${lastName} , Your Email: ${email},  Your Password: ${password}`;

//   document.getElementById("allComplete").innerText = fullSentence;
// }

// prvo go resiv vtoriot nacin no ne mi se predadeni na druga funkcija kako sto e baranjeto, inace go vrakja skroz istiot rezultat
// samo funkccijata registerUser mi bese vo HTML onclick. Bad practice :)
