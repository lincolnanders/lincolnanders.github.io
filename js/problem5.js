var in1er = document.getElementById("q5-1"); // q
var in2er = document.getElementById("q5-2");

var k = 8.99 * Math.pow(10, 9);
var q = 1.602 * Math.pow(10, -19);

function round(input, numDec) {
  return input.toFixed(numDec);
}

function updateX() {
	var equation = "f(x) = 8.99*10^9 * (" + in1er.value + "*10^-9 / x^2 - " + in2er.value + "*10^-9 / (1-x)^2)";

  	document.getElementById("5-1-dfkjekrj").innerHTML = "Graph this in your graphing calculator and find the intersection with the x-axis (should be around 0.6): <br />" + equation;
}

in1er.addEventListener('input', function() {
  updateX();
});

in2er.addEventListener('input', function() {
  updateX();
});
