interface Animal {
    fullType: string;
    name?: string;
    move(): void;
}

class Cat implements Animal {
    fullType: string;
    name?: string;
    constructor(fullType: string, name?: string) {
        this.fullType = fullType;
        this.name = name;
    }

    move(): void {
        console.log("Walks");
    }
}

class Bird implements Animal {
    fullType: string;
    constructor(fullType: string) {
        this.fullType = fullType;
    }

    move(): void {
        console.log("Flies");
    }
}

class Fish implements Animal {
    fullType: string;
    name?: string;
    constructor(fullType: string, name?: string) {
        this.fullType = fullType;
        this.name = name;
    }

    move(): void {
        console.log("Swims");
    }
}

const animals: Animal[] = [
    new Cat("Simplus catus", "Sigma"),
    new Bird("Leleka zhuravel"),
    new Fish("Golden dude", "Blobby"),
    new Fish("Silver dude")
];

console.log("All the animals");
animals.forEach(animal => {
    console.log(`Type: ${animal.fullType}; Name(optional): ${animal.name}`);
    console.log("It:");
    animal.move();
    console.log();
})