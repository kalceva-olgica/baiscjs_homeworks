const firstDiv = document.getElementById("first"); // selecting the first div
console.log("first div:", firstDiv);

const allParagraphs = document.getElementsByTagName("p"); // selecting all paragraphs (we have only 2)
console.log("all paragraphs: ", allParagraphs);

const divs = document.getElementsByTagName("div"); // selectt all <div>
const lastDiv = divs[divs.length - 1]; // getting the last onee (3)
console.log("last div:", lastDiv);

const h3 = lastDiv.querySelector("h3");
console.log("The header 3 in the lst div", h3); // selectins the header 3

const h1 = lastDiv.querySelector("h1");
console.log("The header 1 in the lst div", h1); // selecting the header 1

const secondDiv = document.querySelectorAll("div")[1]; // getting the text from the first paragraph in second div. With [1] we are accessing the second div
const firstParagraph = secondDiv.querySelector("p");
const paragraphText = firstParagraph.textContent;
console.log("First paragraph text:", paragraphText); // ooutputs: "First paragraph in the second div."

secondDiv.textContent += " text"; // add the word "text" to the second div
console.log("Updated second div content:", secondDiv.textContent);

let myLastDiv = document.querySelectorAll("div")[2]; // With [2] we are accessing the last div

// Changingg the text of the <h1> in the last <div>
let h11 = myLastDiv.querySelector("h1");
h1.textContent = "This text has been updated!";

// changing the text in the <h3> in the last <div>
let h33 = myLastDiv.querySelector("h3");
h3.textContent = "This has also been updated!";

console.log("Updated <h1>:", h11.textContent);
console.log("Updated <h3>:", h33.textContent);
