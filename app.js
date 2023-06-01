let result = document.getElementById("result");

function appendNumber(num) {
  result.value += num;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  result.value = "";
}

function clearOneValue() {
  result.value = result.value.slice(0, -1);
}

function appendNumber00(num) {
  result.value += num;
  result.value += num;
}

function calculatePercentage() {
  result.value = result.value / 100;
}
