//SELECT UI ELEMENTS
const display = document.querySelector(".display-actions");
const allClearBtn = document.querySelector(".all-clear-btn");
const equalBtn = document.querySelector(".equal-btn");
const operationsBtns = document.querySelector(".operations .btn");

// OPERATION FUNCTIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operations = {
  "+": add,
  "-": subtract,
  x: multiply,
  "/": divide,
};

let number1, number2, operation;

// ADD EVENT LISTENERS TO DIGITS
const calcDigitsBtns = document.querySelectorAll(".digits .btn");
const digits = Array.from(calcDigitsBtns).slice(0, 10);
for (const digit of digits) {
  digit.addEventListener("click", function () {
    let displayValue = this.innerText;
    let nextNum = false;
    let number1 = this.innerText;
    if (!nextNum) {
      number1 += this.innerText;
      console.log(number1);
    }
    display.value += displayValue;
  });
}

// CLEAR DISPLAY ON AC BTN CLICK
allClearBtn.addEventListener("click", function () {
  display.value = "";
});

// CALCULATION PART
function operate(num1, num2, op) {
  return op(num1, num2);
}
equalBtn.addEventListener("click", operate);
