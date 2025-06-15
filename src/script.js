let calcFirstNum;
let calcOperator;
let calcSecondNum;

function operate(num1, operator, num2) {
  return add(num1, num2);
}

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

// console.log("add function", add(2, 4));
// console.log("subtract function", subtract(10, 5));
// console.log("multiply function", multiply(10, 5));
// console.log("divide function", divide(10, 5));

let calcDisplay = document.querySelector(".calc-display");

function updateCalcDisplay(event) {
  calcFirstNum = event.target.textContent;
  calcDisplay.innerText = calcFirstNum;
  console.log("calc first num", calcFirstNum);

  calcOperator = event.target.textContent;
  calcDisplay.innerText = calcOperator;
  console.log("calc operator", calcFirstNum);

  calcSecondNum = event.target.textContent;
  calcDisplay.innerText = calcSecondNum;
  console.log("calc second num", calcFirstNum);
}

let calcButtons = document.querySelectorAll(".calc-buttons");

calcButtons.forEach((button) => {
  button.addEventListener("click", updateCalcDisplay);
});

function clearCalcDisplay(event) {
  calcDisplay.innerText = "";
}

let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearCalcDisplay);
