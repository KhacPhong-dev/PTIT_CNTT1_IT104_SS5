"use strict";
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
class Dog extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.getName()} says Woof!`);
    }
}
class Cat extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.getName()} says Meow!`);
    }
}
class Rabbit extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.getName()} says Squeak!`);
    }
}
const dog = new Dog("Buddy", 3, "Dog", "Golden Retriever");
const cat = new Cat("Whiskers", 2, "Cat", "Siamese");
const rabbit = new Rabbit("Fluffy", 1, "Rabbit", "Lionhead");
dog.speak();
dog.setAge(4);
console.log(`Updated Dog Age: ${dog.getAge()}`);
cat.setName("Mittens");
