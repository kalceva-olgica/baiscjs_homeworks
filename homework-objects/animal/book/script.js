// Write a JavaScript program to display the reading status of some book.
//  The object should have the next properties: title, author, readingStatus
// and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

class Book {
  constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
  }

  yourReadingStatus() {
    if (this.readingStatus === true) {
      console.log(`Already read "${this.title}" by ${this.author}.`);
    } else {
      console.log(`You still need to read "${this.title}" by ${this.author}.`);
    }
  }
}

const myBook = new Book("The Law of Human Nature", "Robert Greene", true);
console.log(myBook);
myBook.yourReadingStatus();
