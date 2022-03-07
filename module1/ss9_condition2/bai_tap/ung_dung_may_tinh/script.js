function display(a) {
    document.getElementById("result").value += a;
}

function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}

function clearInputText() {
    document.getElementById("result").value = "";
}