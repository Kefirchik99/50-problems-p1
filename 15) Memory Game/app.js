let cardsArray = [
    { id: 1, src: '/pics/card-1.png' },
    { id: 1, src: '/pics/card-1.png' },
    { id: 2, src: '/pics/card-2.png' },
    { id: 2, src: '/pics/card-2.png' },
    { id: 3, src: '/pics/card-3.png' },
    { id: 3, src: '/pics/card-3.png' },
    { id: 4, src: '/pics/card-4.png' },
    { id: 4, src: '/pics/card-4.png' },
    { id: 5, src: '/pics/card-5.png' },
    { id: 5, src: '/pics/card-5.png' },
    { id: 6, src: '/pics/card-6.png' },
    { id: 6, src: '/pics/card-6.png' },
    { id: 7, src: '/pics/card-7.png' },
    { id: 7, src: '/pics/card-7.png' },
    { id: 8, src: '/pics/card-8.png' },
    { id: 8, src: '/pics/card-8.png' },
    { id: 9, src: '/pics/card-9.png' },
    { id: 9, src: '/pics/card-9.png' },
    { id: 10, src: '/pics/card-10.png' },
    { id: 10, src: '/pics/card-10.png' }
]
function randomizeCards(cardsArray) {
    for (let i = cardsArray.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]]
    }
    return cardsArray
}

function displayCards(cardsArray) {
    const gameBoard = document.getElementById('cards')
    gameBoard.innerHTML = ''
    cardsArray.forEach(cards => {
        const cardElement = document.createElement('img')
        cardElement.setAttribute('src', 'pics/backside.png')
        cardElement.setAttribute('data-id', cards.id)
        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    })
}

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

function flipCard(event) {
    if (lockBoard) return
    if (event.target === firstCard) return
    const clickedCard = event.target
    clickedCard.setAttribute('src', cardsArray[clickedCard.getAttribute('data-id') - 1].src)
    if (!hasFlippedCard) {
        firstCard = clickedCard
        hasFlippedCard = true
    } else {
        secondCard =clickedCard
        hasFlippedCard = false
        checkForMatch()
    }
}
let matchCounter = 0

function checkForMatch() {
    let isMatch = firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id')
    if(isMatch) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        matchCounter += 1
        checkWinCondition()
    } else {
        lockBoard = true
        setTimeout(() => {
            firstCard.setAttribute('src', '/pics/backside.png')
            secondCard.setAttribute('src', '/pics/backside.png')
            resetBoard() 
        }, 1000)
    }
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

let timeLeft = 30
const timerElement = document.getElementById('timer')
function updateTimer() {
    timerElement.textContent = `Time left: ${timeLeft} seconds`
    if (timeLeft <= 0) {
        clearInterval(timerInterval)
        checkWinCondition()
    }
    timeLeft -= 1
}
let timerInterval = setInterval(updateTimer, 1000)


function checkWinCondition() {
const totalPairs = cardsArray.length / 2
if (matchCounter === totalPairs) {
    clearInterval(timerInterval)
    alert('You won, all matches found!')
restartGame()
}
}

function restartGame() {
    randomizeCards(cardsArray)
    resetBoard()
    displayCards(cardsArray)
    resetMatchCounterAndTimer()
}
document.getElementById('restart').addEventListener('click', restartGame)

function resetMatchCounterAndTimer() {
    matchCounter = 0
    timeLeft = 30
    timerElement.textContent = `Time left: ${timeLeft} seconds`
    clearInterval(timerInterval)
    timerInterval = setInterval(updateTimer, 1000)
}

document.addEventListener('DOMContentLoaded', function() {
    randomizeCards(cardsArray);
    displayCards(cardsArray);
});
