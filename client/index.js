let indexArr = Array.from({ length: 36 }, (_, i) => i + 1);

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
    a.textContent = data.choices[0];
    b.textContent = data.choices[1];
    c.textContent = data.choices[2];
    d.textContent = data.choices[3];
    
  } catch (e) {
    console.log(e);
  }
};

let Qs = document.querySelector('#quizQuestion');
let a = document.querySelector('#answerA');
let b = document.querySelector('#answerB');
let c = document.querySelector('#answerC');
let d = document.querySelector('#answerD');

for (let i = 1; i <= 36; i++) {
    const button = document.getElementById(`button ${i}`);
    if (button) {
      button.addEventListener("click", () => {
        generateRandomId(indexArr);
      });
    }
  }
//pop

document.addEventListener("DOMContentLoaded", () => {
  const showPopup = (questionNumber) => {
    const popupContainer = document.getElementById("question-popup");
    const questionInfo = document.getElementById("question-info");

    questionInfo.textContent = `This is the pop-up for Question ${questionNumber}`;
    popupContainer.classList.remove("hidden");
  };

  for (let i = 1; i <= 36; i++) {
    const button = document.getElementById(`button ${i}`);
    if (button) {
      button.addEventListener("click", () => {
        showPopup(i);
      });
    }
  }

  const closePopupButton = document.getElementById("close-popup");
  if (closePopupButton) {
    closePopupButton.addEventListener("click", () => {
      const popupContainer = document.getElementById("question-popup");
      popupContainer.classList.add("hidden");
    });
  }
});
