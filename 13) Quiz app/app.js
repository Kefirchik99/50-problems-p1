document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('start-quiz').addEventListener('click', startQuiz);
});

var currentQuestionIndex = 0;
var score = 0;

// Quiz Questions
const quizQuestions = [
    { question: "Which of the following is a JavaScript keyword?", answers: ["var", "let", "const", "function"], correctAnswer: "function" },
    { question: "Which of the following is the best animal?", answers: ["Dog", "Cat", "Hamster", "ALL OF THEM ARE"], correctAnswer: "ALL OF THEM ARE" },
    { question: "Who is the GOAT?", answers: ["Kanye", "J.Hetfield", "Lemmy", "Barney"], correctAnswer: "Lemmy" },
    { question: "Which is the best cuisine in the world?", answers: ["Italian", "'Murican", "Asian", "Junk"], correctAnswer: "Italian" },
    { question: "What color do I like the most?", answers: ["Green", "Yellow", "Blue", "Red"], correctAnswer: "Green" }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("start-quiz").style.display = "none";
    showQuestion();
}

function showQuestion() {
    var quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    quizContainer.style.display = "block";

    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
        return;
    }

    var questionObj = quizQuestions[currentQuestionIndex];
    var questionElement = document.createElement("h2");
    questionElement.id = "questions";
    questionElement.textContent = questionObj.question;
    quizContainer.appendChild(questionElement);

    questionObj.answers.forEach(answer => {
        var answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.id = "answers";
        answerButton.addEventListener("click", () => checkAnswer(answer));
        quizContainer.appendChild(answerButton);
    });
}

function checkAnswer(answer) {
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
        score++;
        console.log("Correct!");
    } else {
        console.log("Wrong answer!");
    }

    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    var results = document.getElementById("results");
    if (score > 3) {  
        results.innerHTML = `<h4>Congratulations! Your score is: ${score}/${quizQuestions.length}!</h4>`;  
    } else {
        results.innerHTML = `<h4>Too bad, your score is: ${score}/${quizQuestions.length}!</h4>`;  
    }
    results.style.display = "block";


    var restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.id = "restart-button";
    restartButton.addEventListener("click", () => {
        results.style.display = "none";
        document.getElementById("start-quiz").style.display = "block";
        startQuiz();
    });
    results.appendChild(restartButton);
}
