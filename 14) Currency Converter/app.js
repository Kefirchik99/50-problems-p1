var exchangeRate = 80000;

function calculatePrice() {
    var price = parseFloat(document.getElementById("input_amount").value);
    if (isNaN(price)) {
        document.getElementById("result-container").innerHTML = "";
    } else {
        var result = price * exchangeRate;
        document.getElementById("result-container").innerHTML = "The amount BTC in EUR is:" + result.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    }
}

var inputField = document.createElement("input");
inputField.id = "input_amount";
inputField.type = "number";
inputField.placeholder = "Enter BTC amount";
document.getElementById("input-container").appendChild(inputField);



document.getElementById("calculate_button").addEventListener("click", calculatePrice);