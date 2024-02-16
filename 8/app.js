let userNumber = document.getElementById('initial_number').value

function checkNumber (userNumber) {
 if (userNumber % 10 === 0) {
     return true
 } else {
     return false
 }
}

document.getElementById('submit').addEventListener('click', function(){
    var userNumber = document.getElementById('initial_number').value
    if (userNumber!== '' && !isNaN(userNumber) && userNumber < 100) {
    var isDivisibleBy10 = checkNumber(userNumber)
    document.getElementById('t_or_f').innerHTML = isDivisibleBy10
    } else {
        document.getElementById('t_or_f').innerHTML = 'Please only enter a number not larger than 100'
    }
    
})

function reset () {
    document.getElementById('reset-1').onclick = function () {
        document.getElementById('t_or_f').innerHTML = ''
        document.getElementById('initial_number').value = ''
    }
}
reset()