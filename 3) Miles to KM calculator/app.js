
function CalculateMitoKm() {
    var miles = document.getElementById("miles").value;
    let resultKm = miles * 1.609;
    document.getElementById("km").value = resultKm;
}

document.getElementById("convert").onclick = function () {
    CalculateMitoKm();
}
function resetResult() {
    document.getElementById('reset-1').onclick = function () {
        document.getElementById('result1').innerHTML = ''
        
    }
  

}
resetResult('result1');