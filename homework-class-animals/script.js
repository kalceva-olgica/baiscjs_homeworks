class Animal {
  constructor(name, type, age, size, isEaten = false) {
    this.name = name;
    this.type = type;
    this.age = age;
    (this.size = size), (this.isEaten = isEaten);
  }

  eat(input) {
    if (input instanceof Animal) {
      if (this.type === "herbivore") {
        console.log(
          `The animal ${this.name} is a herbivoret and does not eat other animals`
        );
      } else {
        if (input.size < this.size / 2) {
          input.isEaten = true;
          console.log(`The animal ${this.name} ate the ${input.name}`);
        } else if (input.size >= this.size * 2) {
          console.log(
            `The animal ${this.name} triwd to eat the ${input.name} but it was too large`
          );
        } else {
          console.log(`The animal ${this.name} did not eat the ${input.name}`);
        }
      }
    } else {
      console.log(`The animal ${this.name} is eating ${input}.`);
    }
  }
}

const lion = new Animal("Lion", "carnivore", 5, 50);
const deer = new Animal("Deer", "herbivore", 3, 30);
const monkey = new Animal("Monkey", "herbivore", 2, 10);
const bear = new Animal("Bear", "omnivore", 7, 80);

bear.eat(lion);
lion.eat(bear);
bear.eat(monkey);
lion.eat(deer);
deer.eat(lion);
lion.eat("grass");
