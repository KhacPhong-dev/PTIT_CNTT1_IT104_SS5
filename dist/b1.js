"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("Toyota Camry", 2020, "Toyota");
const vehicle2 = new Vehicle("Honda Accord", 2021, "Honda");
vehicle1.displayInfo();
vehicle2.displayInfo();
