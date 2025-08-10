
class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public area(): number {
        return this.width * this.height;
    }

    public perimeter(): number {
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
