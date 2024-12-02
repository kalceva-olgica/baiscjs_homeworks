// Write a JavaScript program that calculates the total price of 30 Phones,
// where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.

let phonePrice = 119.95;
let taxRate = 0.05;
let numberOfPhones = 30;

let totalPriceWithoutTax = phonePrice * numberOfPhones;
// ovde racunime prvo cena bez danok = 119.95 * 30
// rezultat: 3598$

let totalTax = totalPriceWithoutTax * taxRate;
// ovde racunime cena so danok posebno za sekoj tel:
// totaltax = 3598 * 5.0 = 179

// Calculate the final total price including tax
let totalPriceWithTax = totalPriceWithoutTax + totalTax;
// ovde ja racunime celokupnata cena so danok
// total = 3598 + 179  = 3777

/* vo komentarite ne koristam decimalni broevi samo za da objasnam
vo kratki celini kako ja razbiram i resavam zadacata :)
*/

console.log(`Price of one phone: $${phonePrice}`);
console.log(`Tax rate: ${taxRate * 100}%`);
console.log(`Number of phones: ${numberOfPhones}`);
console.log(`Total price (without tax): $${totalPriceWithoutTax.toFixed(2)}`);
console.log(`Total tax: $${totalTax.toFixed(2)}`);
console.log(`Total price (with tax): $${totalPriceWithTax.toFixed(2)}`);

// Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.

let minutes = 5;
let seconds = minutes * 60;

console.log(`${minutes} minutes is equal to ${seconds} seconds.`);

// Write a JavaScript program that takes a number and increments the number by +1 and prints the result in the console.

let number = 60;
number = number + 1;
console.log(`The incremented number is ${number}.`);

// Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.

let base = 3;
let height = 5;
let area = (base * height) / 2;

console.log(`The area of a triangle is ${area}.`);

// Write a JavaScript program that takes length and width of a rectangle and finds its perimeter. Print the result in the console.

let width = 6;
let length = 2;
let perimeter = (width + length) * 2;

console.log(`The perimeter of a rectangle is ${perimeter}.`);

// Write a JavaScript program that will calculate area of circle. Print the result in the console.

let radius = 6;
let areaofCircle = Math.PI * radius * radius;
console.log(`The area of the circle is ${area.toFixed(2)}`);
