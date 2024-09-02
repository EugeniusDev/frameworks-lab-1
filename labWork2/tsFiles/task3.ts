abstract class Car {
    protected brand: string;
    protected model: string;
    public year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public abstract getInfo(): void;
}

class Volkswagen extends Car {
    private trimLevel: string;

    constructor(model: string, year: number, trimLevel: string) {
        super("Volkswagen", model, year);
        this.trimLevel = trimLevel;
    }

    getInfo() : void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Trim Level: ${this.trimLevel}`);
    }
}
class Audi extends Car {
    private isQuattro: boolean;

    constructor(model: string, year: number, isQuattro: boolean) {
        super("Audi", model, year);
        this.isQuattro = isQuattro;
    }

    getInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Quattro: ${this.isQuattro}`);
    }
}
class Rivian extends Car {
    private batteryCapacity: number; // in kWh

    constructor(model: string, year: number, batteryCapacity: number) {
        super("Rivian", model, year);
        this.batteryCapacity = batteryCapacity;
    }

    getInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}

const cars: Car[] = [
    new Volkswagen("Golf", 2022, "GTI"),
    new Volkswagen("Passat", 2021, "R-Line"),

    new Audi("A4", 2023, true),
    new Audi("Q7", 2023, false),

    new Rivian("R1T", 2024, 135),
    new Rivian("R1S", 2024, 135)
];

cars.forEach(car => car.getInfo());