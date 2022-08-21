const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["3","2","3","Trignomentry","Pythagoras","90°","Equilateral triangle","Hypotenuse", "right angled","yes"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    // for(let value of formResults.entries()){
    //     console.log(value);
    // }
    for(let value of formResults.values()){
         if(value === correctAnswers[index]){
            score = score + 1;
         }
         index = index + 1;
    }
    outputEl.innerText = "Wow you have scored " + score + " marks.";
}

submitAnswerBtn.addEventListener("click", calculateScore);