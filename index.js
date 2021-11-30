const lastOperationScreen = document.querySelector(".screen-last");
const currentOperationScreen = document.querySelector(".screen-current");
const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete");

let firstOperand = "";
let secondOperand = "";
let operator = undefined;

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;
    currentOperationScreen.textContent += value;
  });
});

operationsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    operator = e.target.innerText;
    if (firstOperand === "") {
      firstOperand = Number(currentOperationScreen.innerText);
      lastOperationScreen.textContent = `${currentOperationScreen.innerText} ${operator}`;
      currentOperationScreen.textContent = "";
    } else {
      lastOperationScreen.textContent = `${currentOperationScreen.innerText} ${operator}`;
      firstOperand = Number(currentOperationScreen.innerText);
      currentOperationScreen.textContent = "";
    }
  });
});

clearButton.addEventListener("click", (e) => {
  reset();
});

equalsButton.addEventListener("click", (e) => {
  secondOperand = Number(currentOperationScreen.innerText);
  console.log(operator);
  let result = add(firstOperand, secondOperand);

  lastOperationScreen.textContent = `${lastOperationScreen.innerText} ${currentOperationScreen.innerText}`;
  currentOperationScreen.innerText = `${result}`;
});

//BASIC FUNCTIONALITY

function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}
function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}
function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}
function divide(firstOperand, secondOperand) {
  return firstOperand / secondOperand;
}

console.log(subtract(35, 2));

function operate(operator, firstOperand, secondOperand) {
  return operator(firstOperand, secondOperand);
}

console.log(operate(add, 7, 3));

function reset() {
  firstOperand = "";
  secondOperand = "";
  operator = undefined;
  lastOperationScreen.textContent = "";
  currentOperationScreen.textContent = "";
}
