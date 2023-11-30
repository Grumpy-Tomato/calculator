// Operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const modulo = (num1, num2) => num1 % num2;
const runOperation = (operation, num1, num2) => {
    switch(operation) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
        case "modulo":
            return modulo(num1, num2);
            return 
        default:
            "ERROR";
    }
}

// numbers for adding
let lastNumber = 0;
let currentOperation = "";
let evaluated = false;

// Calculator display
const calculator = document.querySelector('p');

// buttons
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

// function to clear 
function resetScreen() {
    calculator.textContent = "";
    lastNumber = 0;
    currentOperation = "";
    evaluated = false;
}

// Add numbers to calculator display
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

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(currentOperation) {
            lastNumber = runOperation(currentOperation, lastNumber, Number(calculator.textContent));
            calculator.textContent = "";
        }
    });
});

// clear display and number variables
clearButton.addEventListener('click', () => {
    resetScreen();
});

deleteButton.addEventListener('click', () => {
    calculator.textContent = calculator.textContent.toString().slice(0, -1)
})

addButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "add";
        calculator.textContent = "";
    } else {
        currentOperation = "add";
    }
    
});

subtractButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "subtract";
        calculator.textContent = "";
    } else {
        currentOperation = "subtract";
    }
});

multiplyButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "multiply";
        calculator.textContent = "";
    } else {
        currentOperation = "multiply";
    }
});

divideButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "divide";
        calculator.textContent = "";
    } else {
        currentOperation = "divide";
    }
});

moduloButton.addEventListener('click', () => {
    if (!currentOperation) {
        lastNumber = Number(calculator.textContent)
        currentOperation = "modulo";
        calculator.textContent = "";
    } else {
        currentOperation = "modulo";
    }
});

equalsButton.addEventListener('click', () => {
    if(currentOperation) {
        lastNumber = runOperation(currentOperation, lastNumber, Number(calculator.textContent));
        calculator.textContent = lastNumber;
        evaluated = true;
        lastNumber = 0;
        currentOperation = "";
    }
});

negativeButton.addEventListener("click", () => {
    if(evaluated) {
        calculator.textContent = "-";
        evaluated = false;
    } else if (calculator.textContent === "") {
        calculator.textContent += "-";
    }
});

zeroButton.addEventListener("click", () => {
    if(calculator.textContent !== "" && calculator.textContent.length <= 12) {
        calculator.textContent += zeroButton.textContent;
    }
})

decimalButton.addEventListener("click", () => {
    if(evaluated) {
        calculator.textContent = "";
        evaluated = false;
    }
    if(calculator.textContent.includes(".") === false && calculator.textContent.length <= 12) {
        calculator.textContent += decimalButton.textContent;
    }
})