let indexArr = Array.from({ length: 36 }, (_, i) => i + 1);

const generateRandomId = (indexArr) => {
  let index = Math.floor(Math.random() * indexArr.length);
  let id = indexArr[index];
  indexArr.splice(index, 1);
  return id;
};
console.log(generateRandomId(indexArr));

const questionData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/questions/${id}`);
  } catch (e) {
    console.log(e);
  }
};

console.log(questionData())
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
