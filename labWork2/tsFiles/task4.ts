abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;
    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    public abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    pay(): void {
        console.log("Developer is paying");
    }

    public getAnnualBonus(): number {
        return this.salary * .1;
    }
}

class Manager extends Employee implements Payable {
    pay(): void {
        console.log("Manager is paying");
    }

    public getAnnualBonus(): number {
        return this.salary * .2;
    }
}


let overallBonuses: number = 0;
const employees : Employee[] = [
    new Developer("Billy Herrington", 70, 300),
    new Manager("Noname Nonaymovych", 23, 100),
    new Developer("Bearded Dude", 23, 500)
];

employees.forEach(employee => overallBonuses += employee.getAnnualBonus());

console.log(overallBonuses);