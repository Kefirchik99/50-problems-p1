// Quiz Questions
const quizQuestions = [
    {
        question: "Which of the following is not a JavaScript keyword?",
        answers: ["var", "let", "const", "function"],
        correctAnswer: "let"
    },
    {
        question: "Which of the following is the best animal?",
        answers: ["Dog", "Cat", "Hamster", "ALL OF THEM ARE"],
        correctAnswer: "ALL OF THEM ARE"
    },
    {
        question: "Who is the GOAT?",
        answers: ["Kanye", "J.Hetfield", "Lemmy", "Barney"],
        correctAnswer: "Lemmy"
    },
    {
        question: "Which is the nest qiusine in the world?",
        answers: ["Italian", "'Murican", "Asian", "Junk"],
        correctAnswer: "Italian"
    },
    {
        question: "What color do I like the most?",
        answers: ["Green", "Yellow", "Blue", "Red"],
        correctAnswer: "Green"
    }
]
// Quiz Start
var startButton = document.createElement("button")
startButton.textContent = "Start Quiz"
startButton.addEventListener("click", function(){
    startQuiz()
})
document.body.appendChild(startButton)