const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: 2
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: 0
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: 1
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.style.background = "#eee";
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
}

function selectOption(selected) {
  const q = questions[current];
  optionBtns.forEach(btn => btn.disabled = true);
  if (selected === q.answer) {
    optionBtns[selected].style.background = "#8f8"; // green
    score++;
  } else {
    optionBtns[selected].style.background = "#f88"; // red
    optionBtns[q.answer].style.background = "#8f8"; // correct one
  }
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  current = 0;
  score = 0;
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
}

loadQuestion();
