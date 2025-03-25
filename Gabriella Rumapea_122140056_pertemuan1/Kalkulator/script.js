function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Ekspresi tidak valid');
        clearDisplay();
    }
}

function calculateSqrt() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        alert("Tidak bisa menghitung akar dari angka negatif!");
        clearDisplay();
    }
}
