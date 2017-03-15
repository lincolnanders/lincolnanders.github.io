var f11 = document.getElementById("1.1");
var f12 = document.getElementById("1.2");

var f21 = document.getElementById("2.1");
var f22 = document.getElementById("2.2");

var f31 = document.getElementById("3.1");
var f32 = document.getElementById("3.2");

var f41 = document.getElementById("4.1");
var f42 = document.getElementById("4.2");

function round(input) {
  return input.toFixed(4);
}

function update1() {
  	var ans = f11.value * f12.value;
  	document.getElementById("ans1").innerHTML = "<bold>" + ans + "</bold>";
}

function update2() {
  	var ans = round(f22.value / f21.value / 2);
  	var ans2 = round(f22.value / f21.value);
  	document.getElementById("ans2.1").innerHTML = "<bold>" + ans + "</bold>";
  	document.getElementById("ans2.2").innerHTML = "<bold>" + ans + "</bold>";
  	document.getElementById("ans2.3").innerHTML = "<bold>" + ans2 + "</bold>";
}

function update3() {
	var a = 1 / ( 2 / f31.value );
	var b = 1 / 6;
	var c = 1 / 2 + 1 / a;
	var d = 1 / ( 2 + 3 + 1/c);
  	var req = 1 / (b + d)

  	var vtot = f32.value
  	var itot = vtot / req
  	var i1 = vtot / 6
  	var v1 = vtot
  	var req234 = 5 + 1 / ( 1 / a + 1/2)
  	var i234 = vtot / req234
  	var v2 = i234 * 5
  	var v3 = v1 - v2

  	var i3 = v2 / 3
  	console.log(i1, v1, req234, i234, i234, v3)

  	document.getElementById("ans3.1").innerHTML = "A. <bold>" + round(req) + "</bold>";
  	document.getElementById("ans3.2").innerHTML = "B. <bold>" + round(v3) + "</bold>";
  	document.getElementById("ans3.3").innerHTML = "C. <bold>" + round(i234) + "</bold>";
}

function update4() {
  	var b = 1 / (2 + parseFloat(f41.value))
  	var c = 1 / ( 1/4 + b )
  	var d = 1 / ( c + parseFloat(f41.value) )
  	var ans = round(1 / ( 1 / 4 + d ))

  	var vtot = parseFloat(f42.value)
  	var rtot = ans
  	var itot = vtot / rtot
  	var r23456 = vtot / d

  	document.getElementById("ans4.1").innerHTML = "<bold>" + ans + "</bold> Ohms";
  	document.getElementById("ans4.2").innerHTML = "<bold>" + round(parseFloat(f42.value)/ans) + " </bold> A";
  	document.getElementById("ans4.3").innerHTML = "<bold>" + r23456 + "</bold>";
}

f11.addEventListener('input', function() {
  update1();
});
f12.addEventListener('input', function() {
  update1();
});

f21.addEventListener('input', function() {
  update2();
});
f22.addEventListener('input', function() {
  update2();
});

f31.addEventListener('input', function() {
  update3();
});
f32.addEventListener('input', function() {
  update3();
});

f41.addEventListener('input', function() {
  update4();
});
f42.addEventListener('input', function() {
  update4();
});

update4();