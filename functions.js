function greet(name, age) {
    if (age === void 0) { age = 88; }
    console.log("Hello, ".concat(name, ". You are ").concat(age, " years old."));
}
greet("Billy Herrington");
greet("Bob", 25);
