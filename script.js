//16 numbers is the limit
const output = document.querySelector("#calc-result");
const numbers = Array.from(document.querySelectorAll(".number-button"));

const clearButton = document.querySelector("#clear");
const onButton = document.querySelector("#on");
const functionButton = document.querySelector("#function");

const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");

const equalsButton = document.querySelector("#equal");
const negateButton = document.querySelector("#negative");
const dotButton = document.querySelector("#dot");

let equation = 0;
let currentEquation = 0;
let currentOperator = "";

function assignNumbers() {
  numbers.forEach((currentNumber) => {
    currentNumber.addEventListener("click", () => {
      updateOutput(currentNumber.textContent);
    });
  });
}

function updateOutput(newInput) {
  output.textContent += newInput;
}

function clearOutput() {
  output.textContent = "";
}

output.textContent = "";
// updateOutput("");
