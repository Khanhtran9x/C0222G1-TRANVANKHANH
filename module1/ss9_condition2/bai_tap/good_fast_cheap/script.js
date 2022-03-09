function select() {
    let goodCheck = document.getElementById('good');
    let cheapCheck = document.getElementById('cheap');
    let fastCheck = document.getElementById('fast');

    if (goodCheck.checked && cheapCheck.checked) {
        fastCheck.checked = false;
    } else if (fastCheck.checked && cheapCheck.checked) {
        goodCheck.checked = false;
    } else if (goodCheck.checked && fastCheck.checked) {
        cheapCheck.checked = false;
    }

}