// import { questions } from "./question.js";
// let shuffleQuestions = [];

// let currentQuestionIndex = 0;
// let score = 0;


// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }


// function startQuiz() {
//   shuffleQuestions = shuffleArray([...questions]);
 
//   displayQuestion();
// }


// function displayQuestion() {
//   const quizContainer = document.querySelector(".quiz-container");
//   if (currentQuestionIndex >= shuffleQuestions.length) {
//     endQuiz();
//     return;
//   }
//   let currentQuestion = shuffleQuestions[currentQuestionIndex];
//   quizContainer.innerHTML = `<h3 class="question">${currentQuestion.question}</h3>
//        ${currentQuestion.options
//          .map((opt) => `<button class="option">${opt}</button>`)
//          .join("")}
//      </div>
//     `;
 

//   let timeleft = 5;
//   let timeInterval = setInterval(() => {
//       console.log(timeleft);
//       let timer = document.querySelector("#timer");
      
//       timer.innerHTML = timeleft;
//       if (timeleft <= 0) {
//           clearInterval(timeInterval);
//           currentQuestionIndex++;
//           setTimeout(displayQuestion, 2000);
//           timeleft = 5;
//         }
//         timeleft--;

//   }, 1000);

//   document.querySelectorAll(".option").forEach((option) => {
//     option.addEventListener("click", () => {
//       if (option.textContent === currentQuestion.correct) {
//         score++;
//       }
//       clearInterval(timeInterval);
//       currentQuestion++;
//       setTimeout(displayQuestion, 1000);
//     });
//   });
// }

// function endQuiz() {
//   document.querySelector(".quiz-container").innerHTML = `
//      <h2>Quiz finished</h2>
//      <p>your score ${score}/${shuffleQuestions.length}</p>
//     `;
//     timer.style.display="none";
// }
// window.onload = function () {
//   startQuiz();
// };

import { questions } from "./question.js";

let shuffleQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    shuffleQuestions = shuffleArray([...questions]);
    displayQuestion();
}

function displayQuestion() {
    const quizContainer = document.querySelector(".quiz-container");
    if (currentQuestionIndex >= shuffleQuestions.length) {
        endQuiz();
        return;
    }
    
    let currentQuestion = shuffleQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h3 class="question">${currentQuestion.question}</h3>
        ${currentQuestion.options
            .map((opt) => `<button class="option">${opt}</button>`)
            .join("")}
    `;
    
    let timeleft = 5;
    let timer = document.querySelector("#timer");
    timer.innerHTML = timeleft;

    let timeInterval = setInterval(() => {
        timeleft--;
        timer.innerHTML = timeleft;
        if (timeleft <= 0) {
            clearInterval(timeInterval);
            currentQuestionIndex++;
            setTimeout(displayQuestion, 2000);
        }
    }, 1000);

    document.querySelectorAll(".option").forEach((option) => {
        option.addEventListener("click", () => {
            if (option.textContent === currentQuestion.correct) {
                score++;
            }
            clearInterval(timeInterval);
            currentQuestionIndex++; 
            setTimeout(displayQuestion, 1000);
        });
    });
}

function endQuiz() {
    document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz finished</h2>
        <p>Your score: ${score}/${shuffleQuestions.length}</p>
    `;
}

window.onload = function () {
    startQuiz();
};
