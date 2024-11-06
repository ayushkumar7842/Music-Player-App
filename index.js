const questionsList = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Delhi", "Lucknow", "Hyderabad", "Mumbai"],
    answer: "Delhi",
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    answer: "Harper Lee",
  },
  {
    id: 4,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    id: 5,
    question: "What year did the Titanic sink?",
    options: ["1912", "1918", "1922", "1905"],
    answer: "1912",
  },
];

let currentQuestionindex = 0;
let isOptionSelected = false;
let score = 0;

let scoreElement = document.querySelector(".score span");
// console.log(scoreElement.innerText);

function loadQuestion(currentQuestionindex) {
  const question = questionsList[currentQuestionindex]["question"];
  const questionElement = document.getElementsByClassName("questions")[0];
  const optionsElement = document.querySelectorAll(".option");
  const questionCounter = document.getElementById("question-counter");
  // current question is loaded
  questionElement.textContent = question;
  // current options of that appropriate options is loaded
  console.log(optionsElement);
  optionsElement.forEach((element, index) => {
    console.log(element);
    element.textContent = questionsList[currentQuestionindex]["options"][index];
    console.log("Remove");
    element.classList.remove("correct", "incorrect");
  });
  //update the question counter
  questionCounter.textContent = `Question ${currentQuestionindex + 1} / ${
    questionsList.length
  }`;
}

let optionsElement = document.querySelectorAll(".option");
optionsElement.forEach((element) => {
  element.addEventListener("click", function () {
    if (isOptionSelected) {
      return;
    }
    if (element.innerText === questionsList[currentQuestionindex]["answer"]) {
      // correct answer
      element.classList.add("correct");
      // update the score
      updateScore(true);
    } else {
      element.classList.add("incorrect");
      updateScore(false);
    }
    isOptionSelected = true;
  });
});

function nextQuestion() {
  currentQuestionindex++;
  isOptionSelected = false;
  console.log(currentQuestionindex);
  if (currentQuestionindex < questionsList.length) {
    loadQuestion(currentQuestionindex);
  } else {
    // all the questions have been completed
    alert(`Quiz completed! Your score is ${score}`);
    currentQuestionindex = 0;
    score = 0;
    scoreElement.textContent = score;
    loadQuestion(currentQuestionindex);
  }
}

function updateScore(isCorrectAnswer) {
  let scoreElement = document.querySelector(".score span");

  if (isCorrectAnswer) {
    score = score + 4;
    scoreElement.textContent = score;
  } else {
    score = score - 1;
    scoreElement.textContent = score;
  }
}
// selectOption();
