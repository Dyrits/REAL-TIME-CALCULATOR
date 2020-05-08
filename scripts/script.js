const operatorsList = ["+", "-", "*", "/"]
let operation = ["0"]; // Hold the operation.
let realTimeOperation = []
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const screenBottom = document.querySelector("#screen-bottom");
const screenMiddle = document.querySelector("#screen-middle");
const screenTop = document.querySelector("#screen-top");
const equality = document.querySelector("#equal");
const reset = document.querySelector("#ac");
screenBottom.textContent = "0";
screenMiddle.textContent = "0";
screenTop.textContent = "0";


const add = (valueX, valueY) => valueX + valueY;
const substract = (valueX, valueY) => valueX - valueY;
const divide = (valueX, valueY) => Math.round(valueX / valueY * 100000) / 100000;
const multiply = (valueX, valueY) => valueX * valueY

numbers.forEach(number => {
  number.onclick = addValue;
})

operators.forEach(operator => {
  operator.onclick = operate;
})

equality.onclick =  equal;
reset.onclick = function() {
  screenBottom.textContent = "0";
  screenMiddle.textContent = "0";
  screenTop.textContent = "0";
  operation = ["0"];
  realTimeOperation = [];
}

function equal() {
  screenBottom.textContent = screenTop.textContent;
  screenMiddle.textContent = screenTop.textContent;
}

function addValue($event) {
  if (screenMiddle.textContent.length > 25) { return ;}
  let value = $event.target.value;
  if (value === ".") {
    // If the number already have a dot:
    if (screenBottom.textContent.includes(".")) {return ;}
    screenBottom.textContent += value;
    screenMiddle.textContent += value;
  } else {
    screenBottom.textContent += value;
    currentValue = Number(screenBottom.textContent);
    screenBottom.textContent = currentValue; // Update it as a numerical value.
    if(currentValue !== 0) { screenMiddle.textContent += value; }
    // The first zero is removed if the second character is not a dot:
    if (screenMiddle.textContent.length > 1 && screenMiddle.textContent[0] == "0" && screenMiddle.textContent[1] !== ".") {
      screenMiddle.textContent = screenMiddle.textContent.substring(1);
    }
    updateValues(currentValue, operation);
  }
}

function operate($event) {
  if (operatorsList.includes(screenMiddle.textContent[screenMiddle.textContent.length - 1])) {
    return;
  }
  let operator = $event.target.value;
  let value = Number(screenBottom.textContent);
  operation.push(operator);
  operation.push("0"); // Dummy value.
  screenBottom.textContent = "0";
  screenMiddle.textContent += operator;
}

function updateValues(value, array) {
  array.pop();
  array.push(value);
  realTimeCalculation(array);
}

function realTimeCalculation(array) {
  // This function create a copy of the operation list every time it is updated, and calculate the result.
  // It starts witht the multiplication and division, which have priority.
  realTimeOperation = array.slice();
  for (let index = 0; index < realTimeOperation.length; index ++) {
    if (realTimeOperation[index] === "*") {
      result = multiply(realTimeOperation[index - 1], realTimeOperation[index + 1]);
      realTimeOperation.splice(index - 1, 3, result);
      index --;  
    }
    if (realTimeOperation[index] === "/") {
      result = divide(realTimeOperation[index - 1], realTimeOperation[index + 1]);
      realTimeOperation.splice(index - 1, 3, result);
      index--;
    }
  }
  for (let index = 0; index < realTimeOperation.length; index++) {
    if (realTimeOperation[index] === "+") {
      result = add(realTimeOperation[index - 1], realTimeOperation[index + 1]);
      realTimeOperation.splice(index - 1, 3, result);
      index--;
    }
    if (realTimeOperation[index] === "-") {
      result = substract(realTimeOperation[index - 1], realTimeOperation[index + 1]);
      realTimeOperation.splice(index - 1, 3, result);
      index--;
    }
  }
  screenTop.textContent = realTimeOperation.join("")
  if (screenTop.textContent.length > 1 && screenTop.textContent[0] == "0" && screenTop.textContent[1] !== ".") {
    screenTop.textContent = screenTop.textContent.substring(1);
  }
}




