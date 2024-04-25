//16 numbers is the limit
const calcResultText = document.querySelector("#calc-result-text");
const calcPreview = document.querySelector("#preview-text");
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

let currentEquation = {
  num1: "",
  num2: "",
  operator: "",
  priorOperator: "",
  solution: "",
};

function assignNumbers() {
  numbers.forEach((currentNumber) => {
    currentNumber.addEventListener("click", () => {
      //*Num1 Logic
      if (currentEquation.operator === "") {
        currentEquation.num1 = parseFloat(
          `${currentEquation.num1}${currentNumber.textContent}`,
        );
        changeDisplay(currentEquation.num1);
        //*Num2 Logic
      } else if (currentEquation.operator !== "") {
        currentEquation.num2 = parseFloat(
          `${currentEquation.num2}${currentNumber.textContent}`,
        );
        changeDisplay(currentEquation.num2);
      }
      console.log(currentEquation);
    });
  });
}

divideButton.addEventListener("click", () => {
  currentEquation.priorOperator = currentEquation.operator;
  currentEquation.operator = "/";
  operate("/");
});
multiplyButton.addEventListener("click", () => {
  currentEquation.priorOperator = currentEquation.operator;
  currentEquation.operator = "*";
  operate("*");
});
subtractButton.addEventListener("click", () => {
  currentEquation.priorOperator = currentEquation.operator;
  currentEquation.operator = "-";
  operate("-");
});
addButton.addEventListener("click", () => {
  currentEquation.priorOperator = currentEquation.operator;
  currentEquation.operator = "+";
  operate("+");
});

function operate(operator) {
  console.log("Operating on currentEquation: ", currentEquation);
  if (currentEquation.num1 === "") {
    return;
  }
  if (currentEquation.priorOperator === "") {
    operator = currentEquation.operator;
  } else {
    operator = currentEquation.priorOperator;
  }
  //*Determines if the numbers can be operated of
  let canOperate = false;
  if (currentEquation.num1 !== "" && currentEquation.num2 !== "") {
    canOperate = true;
    console.log("Can Operate");
  }

  let updatePreview = (operatorForPreview) => {
    changePreview(`${currentEquation.num1} ${operatorForPreview}`);
    clearDisplay();
  };

  let processNumbers = (operatorForProcessing) => {
    if (canOperate === false) {
      return;
    }
    console.log("About to process");
    switch (operator) {
      case "/":
        currentEquation.solution = currentEquation.num1 / currentEquation.num2;
        break;
      case "*":
        currentEquation.solution = currentEquation.num1 * currentEquation.num2;
        break;
      case "-":
        currentEquation.solution = currentEquation.num1 - currentEquation.num2;
        break;
      case "+":
        currentEquation.solution = currentEquation.num1 + currentEquation.num2;
        break;
    }
    console.log("finished processing");

    currentEquation.num1 = currentEquation.solution;
    // currentEquation.operator = "";
    currentEquation.num2 = "";
  };

  switch (currentEquation.operator) {
    case "/":
      processNumbers("/");
      updatePreview("/");
      break;
    case "*":
      processNumbers("*");
      updatePreview("*");
      break;
    case "-":
      processNumbers("-");
      updatePreview("-");
      break;
    case "+":
      processNumbers("+");
      updatePreview("+");
      break;
  }
}

function changeDisplay(input) {
  calcResultText.textContent = input;
}

function changePreview(input) {
  calcPreview.textContent = input;
}

function updateDisplay(input) {
  calcResultText.textContent += input;
}

function clearDisplay() {
  calcResultText.textContent = "";
}

assignNumbers();
