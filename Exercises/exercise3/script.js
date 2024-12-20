const students = []; // array to store studentsss
const saveButton = document.getElementById("saveButton");
const studentList = document.getElementById("studentList");

saveButton.addEventListener("click", function () {
  // addEventListener e metod na EventTarget i taa sekogas ke se povika koga nesto ke dostavime do nasata cel
  const firstName = document.getElementById("firstName").value; // .value ni ja zema vrednosta sto ke ja vnesime vo poleto
  const lastName = document.getElementById("lastName").value; //
  const age = document.getElementById("age").value;

  const student = { firstName, lastName, age };
  students.push(student); // ovde gi dodavame studentite vo nizata []students

  console.log(students);

  const li = document.createElement("li");
  li.textContent = `${firstName} ${lastName}, Age: ${age}`;
  studentList.appendChild(li);

  document.getElementById("firstName").value = ""; // ovde imame prazen string bidejki posle submitiranje na vnesenite podatoci sakame povtorno da vnesime nov studnet
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
});


