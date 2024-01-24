let indexArr = Array.from({ length: 50 }, (_, i) => i + 1);
let inQuestion = false;
let correctAnswer;
let pointValue;

const Qs = document.querySelector('#quizQuestion');
const a0 = document.querySelector('#answer0');
const a1 = document.querySelector('#answer1');
const a2 = document.querySelector('#answer2');
const a3 = document.querySelector('#answer3');
const pointsImg = document.querySelector('#points')

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
    pointValue = getPointValue(data.difficulty)
    console.log(pointValue)

  } catch (e) {
    console.log(e);
  }
};


// for (let i = 1; i <= 36; i++) {
//   const button = document.getElementById(`button ${i}`);
//   if (button) {
//     const onClick = () => {
//       if (inQuestion) {
//         return
//       }
//       inQuestion = true;
//       pointsImg.src = "";
//       console.log(inQuestion)
//       generateRandomId(indexArr);
//       button.removeEventListener("click", onClick)
//     }
//     button.addEventListener("click", onClick)
//   }
// }
const verifyAnswer = (e) => {
  if (inQuestion == true) {
    if (correctAnswer == e.target.id) {
      alert("Answer is Correct")
      displayPoints(pointValue)
      inQuestion = false
    }
    else {
      alert("Answer is incorrect")
      inQuestion = false
    }
  }
}

const getPointValue = (difficulty) => {
  let decider = Math.ceil(Math.random() * 100)
  if (difficulty === "Easy") {
    if (decider > 0 && decider < 76) {
      return Math.floor(Math.random() * (3 - 1 + 1) + 1)
    }
    else if (decider > 75 && decider < 91) {
      return 6
    }
    else {
      return 7
    }
  }
  else if (difficulty === "Mid") {
    if (decider > 0 && decider < 76) {
      return Math.floor(Math.random() * (4 - 2 + 1) + 2)
    }
    else if (decider > 75 && decider < 86) {
      return 6
    }
    else if (decider > 85 && decider < 96) {
      return 7
    }
    else {
      return 8
    }
  }
  else {
    if (decider > 0 && decider < 76) {
      return Math.floor(Math.random() * (5 - 3 + 1) + 3)
    }
    else if (decider > 75 && decider < 86) {
      return 6
    }
    else if (decider > 85 && decider < 91) {
      return 7
    }
    else {
      return 8
    }
  }
}

const displayPoints = (points) => {
  switch(points){
    case 1:
      pointsImg.src = 'images/coin1.png'
      break;
    case 2:
      pointsImg.src = 'images/coin2.png'
      break;
    case 3:
      pointsImg.src = 'images/coin3.png'
      break;
    case 4:
      pointsImg.src = 'images/coin4.png'
      break;
    case 5:
      pointsImg.src = 'images/coin5.png'
      break;
    case 6:
      pointsImg.src = 'images/decimate.jpeg'
      break;
    case 7:
      pointsImg.src = 'images/nero-fiddle.jpeg'
      break;
    case 8:
      pointsImg.src = 'images/veni-vidi-vici.jpeg'
    default:
      break;
  }
}

const answer0 = a0.addEventListener("click", verifyAnswer)
const answer1 = a1.addEventListener("click", verifyAnswer)
const answer2 = a2.addEventListener("click", verifyAnswer)
const answer3 = a3.addEventListener("click", verifyAnswer)

// const getPointValue = (difficulty) => {
//   switch(difficulty){
//     case "Easy":
//       return Math.floor(Math.random() * (3 - 1 + 1) + 1)
//     case "Mid":
//       return Math.floor(Math.random() * (4 - 2 + 1) + 2)
//     case "Hard":
//       return Math.floor(Math.random() * (5 - 3 + 1) + 3)
//     default:
//       return 0
//   }
// }



document.addEventListener("DOMContentLoaded", () => {
  const showPopup = () => {
    const popupContainer = document.getElementById("question-popup");
    const questionInfo = document.getElementById("question-info");

  
    popupContainer.classList.remove("hidden");
  };

  for (let i = 1; i <= 36; i++) {
    const button = document.getElementById(`button ${i}`);
    if (button) {
       const onClick = () => {
        
        if (inQuestion) {
          return
        }
        inQuestion = true;
        
        pointsImg.src = "";
        console.log(inQuestion)
        generateRandomId(indexArr);
        
        button.removeEventListener("click", onClick);
        button.style.backgroundColor = "red";
       
        showPopup(i);

        
      }
      button.addEventListener("click", onClick);
      
    }
    button.style.backgroundColor = "red";
  }

  const closePopupButton = document.getElementById("close-popup");
  if (closePopupButton) {
    closePopupButton.addEventListener("click", () => {
      const popupContainer = document.getElementById("question-popup");
      popupContainer.classList.add("hidden");
    });
  }
});
