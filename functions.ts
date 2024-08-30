function greet(name: string, age: number = 88): void {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet("Billy Herrington");
greet("Bob", 25);
