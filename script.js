//16 numbers is the limit
const calcResultText = document.querySelector("#calc-result-text");
const calcPreview = document.querySelector("#preview-text");
const numbers = Array.from(document.querySelectorAll(".number-button"));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  clearOutput(1);
});
const onButton = document.querySelector("#on");
const functionButton = document.querySelector("#function");

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => {
  operatorLogic("divide");
});
const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => {
  operatorLogic("multiply");
});
const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => {
  operatorLogic("subtract");
});
const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
  operatorLogic("add");
});

const equalsButton = document.querySelector("#equal");
const negateButton = document.querySelector("#negative");
const dotButton = document.querySelector("#dot");

let equation = 0;
let currentEquation = 0;
let currentOperator = "";

function assignNumbers() {
  numbers.forEach((currentNumber) => {
    currentNumber.addEventListener("click", () => {
      updateOutput(parseFloat(currentNumber.id));
    });
  });
}

function updateOutput(newInput) {
  // console.log(currentEquation.toString().length + newInput.toString().length);
  if (currentEquation.toString().length + newInput.toString().length > 16) {
    alert("Max number of digits reached");
    return;
  }
  calcResultText.textContent += newInput;
  currentEquation = parseFloat(calcResultText.textContent);
}

function updatePreview(newInput) {
  calcPreview.textContent += newInput;
}

function clearOutput(toClear = 0) {
  if (toClear === 0) {
    calcResultText.textContent = "";
    return;
  }

  currentEquation = currentEquation
    .toString()
    .slice(0, currentEquation.length - toClear);

  calcResultText.textContent = currentEquation;
}

function operatorLogic(operator) {
  if (calcResultText.textContent === "") {
    return;
  }
  switch (operator) {
    case "add":
      updatePreview(currentEquation + " + ");
      equation = equation + currentEquation;
      break;
    case "subtract":
      updatePreview(currentEquation + " - ");
      equation = currentEquation - equation;
      break;
    case "multiply":
      updatePreview(currentEquation + " * ");
      equation = equation * currentEquation;
      break;
    case "divide":
      updatePreview(currentEquation + " / ");
      equation = currentEquation / equation;
      break;
    case "equal":
      equation;
      break;

    default:
      break;
  }
  console.log(equation);

  clearOutput();
}

assignNumbers();
clearOutput();
updateOutput(1001);
updatePreview("");
