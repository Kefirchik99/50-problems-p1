let calculateArray = [];

function populateArray(calculateArray) {
  for (let i = 1; i <= 10; i++) {
    calculateArray.push(i);
  }
}
function additionFunction(total, value) {
  return total + value;
}

populateArray(calculateArray);

let sum = calculateArray.reduce(additionFunction, 0);

console.log(sum);

function displayResult(sum) {   
    document.getElementById('sum-from-array').innerHTML = sum;
}
displayResult(sum);
 