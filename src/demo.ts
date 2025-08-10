

class Animal {
    private name: string;
    protected age: number;
    public species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public speak(): void {
        console.log(`${this.name} makes a sound.`);
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}
class Dog extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    public speak(): void {
        console.log(`${this.getName()} says Woof!`);
    }
}
class Cat extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    public speak(): void {
        console.log(`${this.getName()} says Meow!`);
    }
}
class Rabbit extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    public speak(): void {
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