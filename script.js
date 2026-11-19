const output = document.getElementById("output");

function val(value) {
  output.value += value;
}

function clearDisplay() {
  output.value = '';
}

function calc(){
  output.value = new Function('return ' + output.value)();
}

