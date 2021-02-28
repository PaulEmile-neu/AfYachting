let rangePrice = document.getElementById('range_price');
let priceValue = document.getElementById('value')

priceValue.textContent = `${rangePrice.value} €`;

rangePrice.oninput = function () {
    priceValue.textContent = `${this.value} €`;
}


let rangeLength = document.getElementById('range_length');
let lengthValue = document.getElementById('length');

lengthValue.textContent = `${rangeLength.value} m`;

rangeLength.oninput = function () {
    lengthValue.textContent = `${this.value} m`;
}