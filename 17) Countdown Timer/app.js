
let timerInterval
let initialSeconds

const setTimer = document.createElement("input")
setTimer.type = "number"
setTimer.id = "setTimer"
setTimer.placeholder = "Set timer"
document.getElementById("timer").appendChild(setTimer)

const setTimerInput = document.getElementById("setTimer")

setTimerInput.addEventListener('input', function(event) {
    const timerValue = event.target.value
    const regex = /^[0-9]+$/
    if (regex.test(timerValue)) {
    } else {
        alert("Invalid timer value")
    } 
    
} )

//buttons
const startButton = document.getElementById("start")
startButton.addEventListener('click', function() {
    const timerValue = parseInt(document.getElementById("setTimer").value, 10)
    if (isNaN(timerValue) || timerValue <= 0) {
        alert("Invalid timer value")
        return
    }
    const countdownSecods = timerValue * 60
    startCountdown(countdownSecods)
})

const stopButton = document.getElementById('stop')
stopButton.addEventListener('click', function()
    {
        clearInterval(timerInterval)
    })


const restartButton = document.getElementById('restart')
restartButton.addEventListener('click', function() {
clearInterval(timerInterval)
startCountdown(initialSeconds)
})

 
 

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
    window.location.reload();
});



//functions

function startCountdown(seconds) {
    if(timerInterval) clearInterval(timerInterval)
    initialSeconds = seconds
    const timerElement = document.getElementById("timer")
     timerInterval = setInterval(function() {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        seconds--
        timerElement.textContent = `Time left: ${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
        if (seconds === 0) {
            clearInterval(timerInterval)
            alert("Time's up! Try again.")
             
        }
    }, 1000)
}

 