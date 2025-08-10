"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(5, 10);
console.log(`Chiều rộng: ${rectangle.getWidth()}`);
console.log(`Chiều cao: ${rectangle.getHeight()}`);
console.log(`Chu vi: ${rectangle.perimeter()}`);
console.log(`Diện tích: ${rectangle.area()}`);
rectangle.setWidth(7);
rectangle.setHeight(12);
console.log(`Chiều rộng sau cập nhật: ${rectangle.getWidth()}`);
console.log(`Chiều cao sau cập nhật: ${rectangle.getHeight()}`);
console.log(`Chu vi sau cập nhật: ${rectangle.perimeter()}`);
console.log(`Diện tích sau cập nhật: ${rectangle.area()}`);
