var currentQuestionIndex = 0;
var score = 0;

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

function startQuiz() {
    // Hide the start button
    document.getElementById("start-quiz").style.display = "none";
    
    // Show the quiz container
    var quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "block";
  
    // Assuming we're starting with the first question
    var currentQuestionIndex = 0;
    var questionObj = quizQuestions[currentQuestionIndex];
  
    // Clear previous question
    quizContainer.innerHTML = "";
  
    // Create question element
    var questionElement = document.createElement("h2");
    questionElement.textContent = questionObj.question;
  
    // Append question to the quiz container
    quizContainer.appendChild(questionElement);
  
    // Create and append answers
    questionObj.answers.forEach(function(answer, index) {
      var answerButton = document.createElement("button");
      answerButton.textContent = answer;

      answerButton.addEventListener("click", function() {
        if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
            console.log("Correct!");
        } else {
        console.log("Wrong answer!");
        }
        console.log("Answer clicked:", answer);
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            // Call a function to update the quiz with the next question
            updateQuiz(currentQuestionIndex);
          } else {
            // No more questions, end the quiz and show results
            endQuiz();
          }
      });
      quizContainer.appendChild(answerButton);
    });
  }

  
  