let cardsArray = [
  { id: 1, src: "pics/card-1.png" },
  { id: 1, src: "pics/card-1.png" },
  { id: 2, src: "pics/card-2.png" },
  { id: 2, src: "pics/card-2.png" },
  { id: 3, src: "pics/card-3.png" },
  { id: 3, src: "pics/card-3.png" },
  { id: 4, src: "pics/card-4.png" },
  { id: 4, src: "pics/card-4.png" },
  { id: 5, src: "pics/card-5.png" },
  { id: 5, src: "pics/card-5.png" },
  { id: 6, src: "pics/card-6.png" },
  { id: 6, src: "pics/card-6.png" },
  { id: 7, src: "pics/card-7.png" },
  { id: 7, src: "pics/card-7.png" },
  { id: 8, src: "pics/card-8.png" },
  { id: 8, src: "pics/card-8.png" },
  { id: 9, src: "pics/card-9.png" },
  { id: 9, src: "pics/card-9.png" },
  { id: 10, src: "pics/card-10.png" },
  { id: 10, src: "pics/card-10.png" },
];

function randomizeCards(cardsArray) {
  for (let i = cardsArray.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
  }
  return cardsArray;
}

function displayCards(cardsArray) {
  const gameBoard = document.getElementById("cards");
  gameBoard.innerHTML = "";
  cardsArray.forEach((card) => {
    const cardElement = document.createElement("img");
    cardElement.setAttribute("src", "pics/backside.png");
    cardElement.setAttribute("data-id", card.id);
    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

let hasFlippedCard = false,
  lockBoard = false,
  firstCard,
  secondCard,
  matchCounter = 0,
  timeLeft = 30,
  timerInterval;

function flipCard(event) {
  if (lockBoard || event.target === firstCard || event.target.tagName !== "IMG")
    return;

  const clickedCard = event.target;
  const cardId = clickedCard.getAttribute("data-id");

  const cardToFlip = cardsArray.find((card) => card.id.toString() === cardId);
  if (cardToFlip) {
    clickedCard.setAttribute("src", cardToFlip.src);
  }

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = clickedCard;
  } else {
    secondCard = clickedCard;
    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch =
    firstCard.getAttribute("data-id") === secondCard.getAttribute("data-id");
  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    matchCounter += 1;
    checkWinCondition();
  } else {
    lockBoard = true;
    setTimeout(() => {
      if (!firstCard.classList.contains("matched")) {
        firstCard.setAttribute("src", "pics/backside.png");
      }
      if (!secondCard.classList.contains("matched")) {
        secondCard.setAttribute("src", "pics/backside.png");
      }
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

const timerElement = document.getElementById("timer");

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft -= 1;
    timerElement.textContent = `Time left: ${timeLeft} seconds`;
  } else {
    clearInterval(timerInterval);
    alert("Time's up! Try again.");
    startGame();
  }
}

function checkWinCondition() {
  const totalPairs = cardsArray.length / 2;
  if (matchCounter === totalPairs) {
    clearInterval(timerInterval);
    alert("You won, all matches found!");
    startGame();
  }
}

function restartGame() {
  document.querySelectorAll(".matched").forEach((card) => {
    card.setAttribute("src", "pics/backside.png");
    card.classList.remove("matched");
  });

  randomizeCards(cardsArray);
  resetBoard();
  displayCards(cardsArray);
  resetMatchCounterAndTimer();
}

function resetMatchCounterAndTimer() {
  matchCounter = 0;
  timeLeft = 250;
  timerElement.textContent = `Time left: ${timeLeft} seconds`;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function startGame() {
  randomizeCards(cardsArray);
  resetBoard();
  displayCards(cardsArray);
  resetMatchCounterAndTimer();
}

document.addEventListener("DOMContentLoaded", function () {
  startGame();
});

document.getElementById("restart").addEventListener("click", restartGame);
