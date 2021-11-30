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

deleteButton.addEventListener("click", (e) => {
  let number = currentOperationScreen.textContent;
  let newNumber = number.substring(0, number.length - 1);
  currentOperationScreen.textContent = newNumber;
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
  let result = compute();
  lastOperationScreen.textContent = `${lastOperationScreen.innerText} ${currentOperationScreen.innerText}`;
  currentOperationScreen.innerText = `${result}`;
});

function reset() {
  firstOperand = "";
  secondOperand = "";
  operator = undefined;
  lastOperationScreen.textContent = "";
  currentOperationScreen.textContent = "";
}

function compute() {
  let result = "";
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    case "x":
      result = firstOperand * secondOperand;
      break;
  }
  return result;
}
