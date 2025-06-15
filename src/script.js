// Operation variables
let calcFirstNum;
let calcSecondNum;
let calcOperator;

// Calc basic math operation functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let calcDisplay = document.querySelector(".calc-display");

function updateCalcDisplay(event) {
  let operation = [calcFirstNum, calcOperator, calcSecondNum];

  let clickedButton = operation.map((button) => {
    calcDisplay.innerText = event.target.textContent;
  });

  console.log(clickedButton);
}

let calcButtons = document.querySelectorAll(".calc-buttons");

calcButtons.forEach((button) => {
  button.addEventListener("click", updateCalcDisplay);
});

function clearCalcDisplay(event) {
  calcDisplay.innerText = "";
}

let clearButton = document.querySelector("#ac-button");
clearButton.addEventListener("click", clearCalcDisplay);
