let mixedArray = []
// filling the array

function fillRandArray() {
    mixedArray = []
    for (let i = 0; i < 45; i++) {
        let randomNumber = Math.floor(Math.random() * 101) - 50
        mixedArray.push(randomNumber)

    }
    document.getElementById('show_numbers').innerHTML = mixedArray.join(", ")
}
document.getElementById('generate_numbers').addEventListener('click', fillRandArray)

//filtering the array

function filterRandArray() {
 let filteredArray = mixedArray.filter(number => number >= 0)
    
    document.getElementById('show_filtered').innerHTML = filteredArray.join(", ")
}
document.getElementById('filter_negative').addEventListener('click', filterRandArray)

// leave only ther negative numbers

function leaveNegNum() {
    let filteredNegArray = mixedArray.filter(number => number < 0)
    
    document.getElementById('show_negative').innerHTML = filteredNegArray.join(", ")
}

document.getElementById('leave_negative').addEventListener('click', leaveNegNum)


//reset
function resetResults() {
    document.getElementById('reset-1').onclick = function () {
        document.getElementById('show_numbers').innerHTML = ''
        document.getElementById('show_filtered').innerHTML = ''
        document.getElementById('show_negative').innerHTML = ''
    }
}
resetResults()
