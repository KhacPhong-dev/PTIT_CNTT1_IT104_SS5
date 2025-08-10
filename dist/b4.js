"use strict";
class Employee {
    constructor(id, name, company, phone) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
const emp = new Employee(1, "KhacPhong", "rikkei sort", "1234567890");
emp.printInfo();
