interface Shape {
    getArea(): number;
    getPerimeter(): number;
}

class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
    getArea(): number {
        return Math.PI * (this.radius ** 2);
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    private sideA: number;
    private sideB: number;
    constructor(sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
    }
    getArea(): number {
        return this.sideA * this.sideB;
    }
    getPerimeter(): number {
        return 2 * this.sideA + 2 * this.sideB;
    }
}

class Triangle implements Shape {
    private sideA: number;
    private sideB: number;
    private sideC: number;
    constructor(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
    getArea(): number {
        const halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC));
    }
    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }
}

let overallArea: number = 0;
let overallPerimeter: number = 0;

const shapes: Shape[] = [
    new Circle(2),
    new Rectangle(5, 2),
    new Triangle(1, 2, 3)
];

shapes.forEach(shape => {
    overallArea += shape.getArea();
    overallPerimeter += shape.getPerimeter();
})

console.log(`Overall area: ${overallArea}`);
console.log(`Overall perimeter: ${overallPerimeter}`);
