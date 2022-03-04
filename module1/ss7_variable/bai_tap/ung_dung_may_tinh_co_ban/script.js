function addition(){
    var inputFirstValue = document.getElementById("firstvalue").value;
    var firstValue = parseFloat(inputFirstValue);
    var inputSecondValue = document.getElementById("secondvalue").value;
    var secondValue = parseFloat(inputSecondValue);
    var a = firstValue + secondValue;
    document.getElementById('result').innerHTML = "Result: " + a;
}
function subtraction(){
    var inputFirstValue = document.getElementById("firstvalue").value;
    var firstValue = parseFloat(inputFirstValue);
    var inputSecondValue = document.getElementById("secondvalue").value;
    var secondValue = parseFloat(inputSecondValue);
    var a = firstValue - secondValue;
    document.getElementById('result').innerHTML = "Result: " + a;
}
function multiplication(){
    var inputFirstValue = document.getElementById("firstvalue").value;
    var firstValue = parseFloat(inputFirstValue);
    var inputSecondValue = document.getElementById("secondvalue").value;
    var secondValue = parseFloat(inputSecondValue);
    var a = firstValue * secondValue;
    document.getElementById('result').innerHTML = "Result: " + a;
}
function division(){
    var inputFirstValue = document.getElementById("firstvalue").value;
    var firstValue = parseFloat(inputFirstValue);
    var inputSecondValue = document.getElementById("secondvalue").value;
    var secondValue = parseFloat(inputSecondValue);
    var a = firstValue / secondValue;
    document.getElementById('result').innerHTML = "Result: " + a;
}
