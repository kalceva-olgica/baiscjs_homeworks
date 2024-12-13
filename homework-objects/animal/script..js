class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }

  speak(cat) {
    console.log(
      `My name is ${this.name}. I am ${this.kind}. I am one of a kind :P`
    );
    console.log(`cat says: ${cat}`);
  }
}

const myAnimal = new Animal("Teddy", "British Shorthair");
console.log(myAnimal);
myAnimal.speak("hey dude");
