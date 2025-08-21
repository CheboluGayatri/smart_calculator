function add(a, b) {
    return a + b;
}

function subtract(a, b) {  
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Division by zero error";
    }
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function calculate(a, b, operator) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid input";
    }

    let result;

    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '^':
            result = power(a, b);
            break;
        default:
            return "Invalid operator";
    }

    if (typeof result === "number") {
        return Number(result.toFixed(2));
    } else {
        return result;
    }
}

// Test cases
console.log(calculate(10, 5, "+"));  // 15
console.log(calculate(8, 2, "-"));   // 6
console.log(calculate(4, 2, "*"));   // 8
console.log(calculate(9, 0, "/"));   // Division by zero error
console.log(calculate(2, 3, "^"));   // 8
