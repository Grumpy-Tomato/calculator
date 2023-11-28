// Operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Calculator display
const calculator = document.querySelector('p');

// buttons
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll('.operation')
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

// functions
function resetScreen() {
    calculator.textContent = "";
}

// Add numbers to calculator display
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.textContent += button.textContent;
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.textContent += button.textContent;
    });
});

// clear display and number variables
clearButton.addEventListener('click', () => {
    resetScreen();
} )

// start operation
function startOperation(operation, num1, num2) {

    if (operation == 'add') {
        return add(num1, num2)
    }

}