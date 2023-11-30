// Calculator Operations
const runOperation = (operation, num1, num2) => {
    switch(operation) {
        case "add":
            return num1 + num2;
            break;
        case "subtract":
            return num1 - num2;
            break;
        case "multiply":
            return num1 * num2;
            break;
        case "divide":
            return num1 / num2;
            break;
        case "modulo":
            return num1 % num2;
            break;
        default:
            "ERROR";
    }
}

// Global variables
let lastNumber = 0;
let currentOperation = "";
let evaluated = false;

// Calculator display
const calculator = document.querySelector('p');

// Buttons
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll('.operation')
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide");
const moduloButton = document.querySelector('#modulo');
const negativeButton = document.querySelector('#negative');
const zeroButton = document.querySelector('#zero');
const equalsButton = document.querySelector("#evaluate");
const decimalButton = document.querySelector('#decimal');

// Clear display and reset global variables
function resetScreen() {
    calculator.textContent = "";
    lastNumber = 0;
    currentOperation = "";
    evaluated = false;
}

// Add numbers that are clicked to the display
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(evaluated) {
            calculator.textContent = "";
            evaluated = false;
        }
        if (calculator.textContent.length <= 12) {
            calculator.textContent += button.textContent;
        }
    });
});

// Run the operation on the stored number and the number on the display
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(currentOperation) {
            lastNumber = runOperation(currentOperation, lastNumber, Number(calculator.textContent));
            calculator.textContent = "";
        }
    });
});

// Clear the screen and reset variables when this button is clicked
clearButton.addEventListener('click', () => {
    resetScreen();
});

// Delete characters one by one
deleteButton.addEventListener('click', () => {
    calculator.textContent = calculator.textContent.toString().slice(0, -1)
})

// Set the current operation to 'add'
addButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "add";
        calculator.textContent = "";
    } else {
        currentOperation = "add";
    }
    
});

// Set the current operation to 'subtract'
subtractButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "subtract";
        calculator.textContent = "";
    } else {
        currentOperation = "subtract";
    }
});

// Set the current operation to 'multiply'
multiplyButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "multiply";
        calculator.textContent = "";
    } else {
        currentOperation = "multiply";
    }
});

// Set the current operation to 'divide'
divideButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "divide";
        calculator.textContent = "";
    } else {
        currentOperation = "divide";
    }
});

// Set the current operation to 'modulo'
moduloButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "modulo";
        calculator.textContent = "";
    } else {
        currentOperation = "modulo";
    }
});

// Display final value when hitting the equals button
equalsButton.addEventListener('click', () => {
    if(currentOperation) {
        lastNumber = runOperation(currentOperation, lastNumber, Number(calculator.textContent));
        calculator.textContent = lastNumber;
        evaluated = true;
        lastNumber = 0;
        currentOperation = "";
    }
});

// Negative symbol button
negativeButton.addEventListener("click", () => {
    if(evaluated) {
        calculator.textContent = "-";
        evaluated = false;
    } else if (calculator.textContent === "") {
        calculator.textContent += "-";
    }
});

// Zero button
zeroButton.addEventListener("click", () => {
    if(calculator.textContent !== "" && calculator.textContent.length <= 12) {
        calculator.textContent += zeroButton.textContent;
    }
})

// Decimal Button
decimalButton.addEventListener("click", () => {
    if(evaluated) {
        calculator.textContent = "";
        evaluated = false;
    }
    if(calculator.textContent.includes(".") === false && calculator.textContent.length <= 12) {
        calculator.textContent += decimalButton.textContent;
    }
})