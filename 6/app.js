let randomArray = []

//filling the array

function fillArray() {
    randomArray = []
    for (let i = 0; i < 25; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1
        randomArray.push(randomNumber)

    }
    document.getElementById('show-array').innerHTML = randomArray.join(", ")
}
document.getElementById('show-random-numbers').addEventListener('click', fillArray)


//Sorting the array

function sortArray() {
    randomArray.sort(function (a, b) {
        return a - b;
    })
    document.getElementById('sorted-array').innerHTML = randomArray.join(", ")
}

document.getElementById('sort-array').addEventListener('click', sortArray)

//reset 
function resetResult() {
    document.getElementById('reset-1').onclick = function () {
        document.getElementById('show-array').innerHTML = ''
        document.getElementById('sorted-array').innerHTML = ''
    }

}
resetResult();