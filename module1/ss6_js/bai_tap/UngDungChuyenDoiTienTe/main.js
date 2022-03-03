
function convert() {
    let from = document.getElementById('fromcurrency');
    let fromValue = from.options[from.selectedIndex].value;
    let to = document.getElementById('tocurrency');
    let toValue = to.options[to.selectedIndex].value;
    const amount = document.querySelector('input').value;
    let aValue = amount;
    const vndToUsd = amount / 23000;
    const usdToVnd = amount * 23000;
    if (fromValue == "usd" && toValue == "vietnam") {
        document.getElementById('result').innerHTML = 'Result: ' + usdToVnd;
    } else if (fromValue == "usd" && toValue == "usd") {
        document.getElementById('result').innerHTML = 'Result: ' + aValue;
    } else if (fromValue == "vietnam" && toValue == "usd") {
        document.getElementById('result').innerHTML = 'Result: ' + vndToUsd;
    } else if (fromValue == "vietnam" && toValue == "vietnam") {
        document.getElementById('result').innerHTML = 'Result: ' + aValue;
    } 

}
