let textInQuestion = document.getElementById('the_text').textContent

function checkVowels(text) {
    let matches = text.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

function updateVowelCount() {
    let count = checkVowels(textInQuestion)
    document.getElementById('amount_vowels').innerHTML = count
}

document.getElementById('check_vowels').addEventListener('click', function () {
    updateVowelCount()
})

//real time count
document.getElementById('real_time_count').textContent = '0'

document.getElementById('input_text').addEventListener('input', function () {
    let currentText = this.value
    if (currentText === '' || validateInput(currentText)) {

        let vowelCount = checkVowels(currentText)
        document.getElementById('real_time_count').textContent = vowelCount.toString()
    } else {
        document.getElementById('real_time_count').textContent = "Only letters please"

    }
})

//input validation

function validateInput(text) {
    if (text === '' || /^[a-zA-Z]*$/.test(text)) {
        return true
    } else {
        return false
    }
}

//reset button
function reset() {
    document.getElementById('reset1').onclick = function () {
        document.getElementById('amount_vowels').innerHTML = ''
        //document.getElementById('real_time_count').innerHTML = ''

    }
}
reset()