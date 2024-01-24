let indexArr = Array.from({ length: 36 }, (_, i) => i + 1);
let inQuestion = false;
let correctAnswer;

const generateRandomId = (indexArr) => {
  let index = Math.floor(Math.random() * indexArr.length);
  let id = indexArr[index];
  indexArr.splice(index, 1);
  questionData(id);
};

const questionData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/questions/${id}`);
    const data = await response.json();

    Qs.textContent = data.question;
    a0.textContent = data.choices[0];
    a1.textContent = data.choices[1];
    a2.textContent = data.choices[2];
    a3.textContent = data.choices[3];
    correctAnswer = "answer" + data.answer;
    
  } catch (e) {
    console.log(e);
  }
};

let Qs = document.querySelector('#quizQuestion');
let a0 = document.querySelector('#answer0');
let a1 = document.querySelector('#answer1');
let a2 = document.querySelector('#answer2');
let a3 = document.querySelector('#answer3');

for (let i = 1; i <= 36; i++) {
    const button = document.getElementById(`button ${i}`);
    if (button) {
        const onClick = () => {
            if(inQuestion){
                return
            }
            inQuestion = true;
            generateRandomId(indexArr);
            button.removeEventListener("click", onClick)
        }
        button.addEventListener("click", onClick)
    }
}
const verifyAnswer = (e) => {
    console.log(e.target.id);
    if (correctAnswer == e.target.id )
    {
        alert("Answer is Correct")
    }
    else
    {
        alert("Answer is incorrect")
    }
}
 


const answer0 = a0.addEventListener("click",verifyAnswer)
const answer1 = a1.addEventListener("click",verifyAnswer)
const answer2 = a2.addEventListener("click",verifyAnswer)
const answer3 = a3.addEventListener("click",verifyAnswer)

 
// document.addEventListener("DOMContentLoaded", () => {
//   const showPopup = (questionNumber) => {
//     const popupContainer = document.getElementById("question-popup");
//     const questionInfo = document.getElementById("question-info");

//     questionInfo.textContent = `This is the pop-up for Question ${questionNumber}`;
//     popupContainer.classList.remove("hidden");
//   };

//   for (let i = 1; i <= 36; i++) {
//     const button = document.getElementById(`button ${i}`);
//     if (button) {
//       button.addEventListener("click", () => {
//         showPopup(i);
//       });
//     }
//   }

//   const closePopupButton = document.getElementById("close-popup");
//   if (closePopupButton) {
//     closePopupButton.addEventListener("click", () => {
//       const popupContainer = document.getElementById("question-popup");
//       popupContainer.classList.add("hidden");
//     });
//   }
// });
