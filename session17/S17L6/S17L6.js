const display = document.getElementById("display");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
let firstNumber = "";
let operator = "";
let waitingForSecondNumber = false;
let hasError = false;
numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const number = button.dataset.number;

        if (hasError) {
            display.value = "";
            hasError = false;
        }
        if (waitingForSecondNumber) {
            display.value = number;
            waitingForSecondNumber = false;
        } else {
            if (display.value === "0") {
                display.value = number;
            } else {
                display.value += number;
            }
        }
    });
});
decimalButton.addEventListener("click", function () {
    if (hasError) {
        display.value = "";
        hasError = false;
    }
    if (waitingForSecondNumber) {
        display.value = "0.";
        waitingForSecondNumber = false;
    } else if (!display.value.includes(".")) {
        display.value += ".";
    }
});
operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (display.value === "" || hasError) {
            return;
        }
        firstNumber = Number(display.value);
        operator = button.dataset.operator;
        waitingForSecondNumber = true;
    });
});
equalButton.addEventListener("click", function () {
    if (
        operator === "" ||
        display.value === "" ||
        waitingForSecondNumber ||
        hasError
    ) {
        return;
    }
    const secondNumber = Number(display.value);
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                display.value = "Không thể chia cho 0";
                hasError = true;
                operator = "";
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }
    if (!Number.isFinite(result)) {
        display.value = "Lỗi phép tính";
        hasError = true;
    } else {
        display.value = String(Number(result.toPrecision(12)));
    }
    operator = "";
    waitingForSecondNumber = true;
});
clearButton.addEventListener("click", function () {
    display.value = "";
    firstNumber = "";
    operator = "";
    waitingForSecondNumber = false;
    hasError = false;
});