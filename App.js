const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// function displayEvenNumbers(numberArray) {

// for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] %2 === 0) {
//         console.log(numberArray[i])
//     }
// }
// }
// isplayEvenNumbers(numberArray)

function displayEvenNumbers(array) {
    let displayContent = 'Even numbers :'
    for (const number of array) {
        if (number % 2 === 0) {
            displayContent += number + ''
        }
    }
    document.getElementById('result1').innerHTML = displayContent
}

document.getElementById('divide_by_2').onclick = function () {
    displayEvenNumbers(numberArray)
}

function resetResult() {
    document.getElementById('reset-1').onclick = function () {
        document.getElementById('result1').innerHTML = ''
        
    }
  

}
resetResult('result1');