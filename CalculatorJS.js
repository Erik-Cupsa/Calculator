var num1 = 0;
var num2 = 0;
var mem = 0;
var signChoice = "";
var userInput = document.getElementById("input");
var answer;
function addNum(num){
  document.getElementById("box").value = document.getElementById("box").value + num;
}
function setSign(sign){
  signChoice = sign;
  num1 = document.getElementById("box").value;
  document.getElementById("box").value = "";
}
function Clear() {
document.getElementById("box").value = "";
var userInput = "";
}
function secondPressed() {
  percent.innerHTML = "π";
  percent.setAttribute("onclick", "setSign('π')");

  inverse.innerHTML = "sin";
  inverse.setAttribute("onclick", "setSign('sin')");

  squareroot.innerHTML = "cos";
  squareroot.setAttribute("onclick", "setSign('cos')");

  exponent.innerHTML = "tan";
  exponent.setAttribute("onclick", "setSign('tan')");

  memplus.innerHTML = "ArcSin";
  memplus.setAttribute("onclick", "setSign('sin^-1')");

  memminus.innerHTML = "ArcCos";
  memminus.setAttribute("onclick", "setSign('cos^-1')");

  memread.innerHTML = "ArcTan";
  memread.setAttribute("onclick", "setSign('tan^-1')");

  clearall.innerHTML = "MC";
  clearall.setAttribute("onclick", "setSign('memclear')");

  second.innerHTML = "1st";
  second.setAttribute("onclick", "firstPressed()");
}
function firstPressed() {
  percent.innerHTML = "%";
  percent.setAttribute("onclick", "setSign('%')");

  inverse.innerHTML = "1/x";
  inverse.setAttribute("onclick", "setSign('1/x')");

  squareroot.innerHTML = "√x";
  squareroot.setAttribute("onclick", "setSign('√x')");

  exponent.innerHTML = "^";
  exponent.setAttribute("onclick", "setSign('^')");

  memplus.innerHTML = "M+";
  memplus.setAttribute("onclick", "setSign('m+')");

  memminus.innerHTML = "M-";
  memminus.setAttribute("onclick", "setSign('m-')");

  memread.innerHTML = "MR";
  memread.setAttribute("onclick", "setSign('mr')");

  clearall.innerHTML = "C";
  clearall.setAttribute("onclick", "Clear()");

  second.innerHTML = "2nd";
  second.setAttribute("onclick", "secondPressed()");
}

window.onkeypress = function(event) {
    if (event.keyCode == 13) {
      var userInput = document.getElementById("input");
        document.getElementById("box").value = eval(userInput.value);
    }
 }

 function evaluateValue() {
     answer = eval(ogQ.value);
     ogQ.value = answer;
     uiQ = ogQ.value;
 }

function equalPressed() {
  num2= document.getElementById("box").value;
  if (signChoice =="+") {
    document.getElementById("box").value = Number(num1) + Number(num2);
  }
  else if (signChoice =="-") {
    document.getElementById("box").value = Number(num1) - Number(num2);
  }
  else if (signChoice =="x") {
    document.getElementById("box").value = Number(num1) * Number(num2);
  }
  else if (signChoice =="÷") {
    document.getElementById("box").value = Number(num1) / Number(num2);
  }
  else if (signChoice =="1/x") {
    document.getElementById("box").value = 1 / Number(num1);
  }
  else if (signChoice =="√x") {
    document.getElementById("box").value = Math.sqrt(num1);
  }
  else if (signChoice =="^") {
    document.getElementById("box").value = Math.pow(num1, num2);
  }
  else if (signChoice =="%") {
    document.getElementById("box").value = Number(num1) / 100;
  }
  else if (signChoice =="(-)") {
    document.getElementById("box").value = Number(num1) * (-1);
  }
  else if (signChoice =="m+") {
    mem = Number(num1) + Number(mem);
  }
  else if (signChoice =="m-") {
    mem = Number(mem) - Number(num1);
  }
  else if (signChoice =="mr") {
    document.getElementById("box").value = Number(mem);
  }
  else if (signChoice =="mc") {
    mem = 0;
  }
  else if (signChoice =="π") {
    document.getElementById("box").value = Math.PI;
  }
  else if (signChoice =="sin") {
    document.getElementById("box").value = Math.sin(num1);
  }
  else if (signChoice =="cos") {
    document.getElementById("box").value = Math.cos(num1);
  }
  else if (signChoice =="tan") {
    document.getElementById("box").value = Math.tan(num1);
  }
  else if (signChoice =="sin^-1") {
    var invRSin = Math.asin(num1);
    var invDSin = (Math.asin(num1)) * (180 / Math.PI);
    document.getElementById("box").value = invRSin.toFixed(2) + " radiands or " + invDSin.toFixed(2) + " degrees";
  }
  else if (signChoice =="cos^-1") {
    var invRCos = Math.acos(num1);
    var invDCos = (Math.acos(num1)) * (180 / Math.PI);
    document.getElementById("box").value = invRCos.toFixed(2) + " radiands or " + invDCos.toFixed(2) + " degrees";
  }
  else if (signChoice =="tan^-1") {
    var invRTan = Math.atan(num1);
    var invDTan = (Math.atan(num1)) * (180 / Math.PI);
    document.getElementById("box").value = invRTan.toFixed(2) + " radiands or " + invDTan.toFixed(2) + " degrees";
  }
  else {
    document.getElementById("box").value = "Please try entering your equation again"
  }
}
