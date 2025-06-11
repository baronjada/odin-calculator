let calcFirstNum = 10;
let calcOperator = "+";
let calcSecondNum = 9;

function operate(num1, operator, num2) {
  return add(num1, num2);
}

console.log(
  "operate function",
  operate(calcFirstNum, calcOperator, calcSecondNum)
);

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

console.log("add function", add(2, 4));
console.log("subtract function", subtract(10, 5));
console.log("multiply function", multiply(10, 5));
console.log("divide function", divide(10, 5));

function updateCalcDisplay(event) {
  console.log("CLICKED");
}

let calcDisplay = document.querySelector(".calc-display");
console.log(calcDisplay);

let calcButtons = document.querySelectorAll(".calc-buttons");
calcButtons.forEach((button) => {
  button.addEventListener("click", updateCalcDisplay);
});
