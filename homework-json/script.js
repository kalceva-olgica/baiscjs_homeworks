/*
Return an array that will display only student's first name and last name as a string     zavrseno
All students sorted by the averageGrade property (ascending)  zavrseno
All students with an average grade higher than 3            zavrseno
All female student names with an average grade of 5         zavrseno
All male student full names who live in Skopje and are over 18 years old    zavrseno
The average grades of all female students over the age of 24    zavrseno
All male students with a name starting with B and average grade over 2 zavrseno
*/
fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then((response) => response.json())
  .then((data) => {
    const students = data.sort((a, b) => a.averageGrade - b.averageGrade);

    console.log(students);

    const studentNames = students.map((student) => ({
      firstName: student.firstName,
      lastName: student.lastName,
    }));

    console.log(studentNames);

    const higherThanThree = students.filter(
      (student) => student.averageGrade > 3
    );
    console.log(higherThanThree);

    const femaleStudents = students.filter(
      (student) => student.gender === "Female" && student.averageGrade === 5
    );
    console.log(femaleStudents);

    const maleStudents = students.filter(
      (student) =>
        student.gender === "Male" &&
        student.city === "Skopje" &&
        student.age > 18
    );
    console.log(maleStudents);

    const averageGradesFemale = students.filter(
      (student) =>
        student.averageGrade && student.gender === "Female" && student.age > 24
    );
    console.log(averageGradesFemale);

    const allMalesWithB = students.filter(
      (student) =>
        student.gender === "Male" &&
        student.averageGrade > 2 &&
        student.firstName.includes("B", 0)
    );
    console.log(allMalesWithB);
  })
  .catch((error) => console.error("Error fatching data:", error));
