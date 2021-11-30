const lastOperationScreen = document.querySelector(".screen-last");
const currentOperationScreen = document.querySelector(".screen-current");
const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete");

let firstOperand = "";
let secondOperand = "";
let operator = null;
let result = null;

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      currentOperationScreen.textContent.includes(".") === true &&
      e.target.innerText === "."
    )
      return;

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
    if (operator != null && result === null) {
      operator = e.target.innerText;
      secondOperand = Number(currentOperationScreen.innerText);
      let newResult = compute();
      console.log(newResult);
      firstOperand = newResult;
      result = compute();

      lastOperationScreen.textContent = `${firstOperand} ${operator} ${secondOperand}`;
      currentOperationScreen.innerText = `${result}`;
    } else {
      operator = e.target.innerText;
      if (firstOperand === "") {
        firstOperand = Number(currentOperationScreen.innerText);
        lastOperationScreen.textContent = `${firstOperand} ${operator}`;
        currentOperationScreen.textContent = "";
      } else {
        lastOperationScreen.textContent = `${currentOperationScreen.innerText} ${operator}`;
        firstOperand = Number(currentOperationScreen.innerText);
        currentOperationScreen.textContent = "";
      }
    }
  });
});

clearButton.addEventListener("click", reset);

equalsButton.addEventListener("click", (e) => {
  if (firstOperand === "") return;
  if (secondOperand === "") {
    secondOperand = Number(currentOperationScreen.innerText);
    let result = compute();
    lastOperationScreen.textContent = `${firstOperand} ${operator} ${secondOperand}`;
    currentOperationScreen.innerText = `${result}`;
  } else {
    secondOperand = Number(currentOperationScreen.innerText);
    let result = compute();
    lastOperationScreen.textContent = `${firstOperand} ${operator} ${secondOperand}`;
    currentOperationScreen.innerText = `${result}`;
  }
});

function reset() {
  firstOperand = "";
  secondOperand = "";
  result = null;
  operator = null;
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

//fix multiple equals presses

//fix chaining operations aka not pressing equals
