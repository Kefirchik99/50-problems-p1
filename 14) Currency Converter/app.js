function calculatePrice() {
    var price = document.getElementById("price").value;
    var exchangeRate = document.getElementById("exchange-rate").value;
    var result = price - (price * exchangeRate / 100);
    document.getElementById("result-container").innerHTML = result;
}