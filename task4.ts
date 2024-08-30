function calculateIceCreamCost(size: string, toppingsInput: string, shouldAddMarshmallow: boolean = false): number {
    let cost: number = 0;

    if (size === "small") {
        cost += 10;
    } else if (size === "large") {
        cost += 25;
    } else {
        throw new Error("Invalid type selected")
    }

    toppingsInput.split(",").forEach(topping => {
        if (topping === "1") {
            cost += 5;
        } else if (topping === "2") {
            cost += 6;
        } else if (topping === "3") {
            cost += 10;
        } else {
            throw new Error("Invalid toppings selected")
        }
    });

    if (shouldAddMarshmallow) {
        cost += 5;
    }

    return cost;
}

const size = validateInput(
    prompt("Enter size (small/large):")
);

const toppingsInput = validateInput(
    prompt("Choose toppings (at least one) from list:\n" +
        "\t1. Chocolate (+5 hrn);\n" +
        "\t2. Caramel (+6 hrn);\n" +
        "\t3. Berries (+10 hrn).\n" +
        "Enter comma-separated numbers:")
);
const shouldAddMarshmallow = confirm("Do you want to add marshmallow (+5 hrn)?");

const totalCost = calculateIceCreamCost(size, toppingsInput, shouldAddMarshmallow);
console.log(`Total cost: ${totalCost} hrn`);

function validateInput(object: string | null): string {
    if (object == null) {
        throw new Error("Invalid input");
    }
    return String(object);
}