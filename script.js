//To Do: Questions stored in object, buttons in an array (to decrease verbosity)
//To Do: Array of question objects
//To Do: Run a formatter to make sure html is valid
//To Do: Make sure README contains link to deployed application
//To Do: Create Buttons Inside Loop
//To Do: get localstorage to work correctly

//---GLOBAL VARIABLES---//
//2020.03.11 NOTE: Avoid global variable declarations in future projects
var startBtn = document.getElementById("startBtn");
var questionBox = document.getElementById("question-box");
var questionTitle = document.getElementById("questionTitle");
var questionContent = document.getElementById("questionContent");
var correctAnswer = document.getElementById("correctAns");
var wrongAnswer = document.getElementById("wrongAns");
var ans1 = document.getElementById("choice1");
var ans2 = document.getElementById("choice2");
var ans3 = document.getElementById("choice3");
var ans4 = document.getElementById("choice4");
var timeCount = document.getElementById("timer");
var gameOverScreen = document.getElementById("game-over");
var resetGame1 = document.getElementById("reset1");//cant get by class name to work
var resetGame2 = document.getElementById("reset2");
var resetGame3 = document.getElementById("reset3");
var welcomeScreen = document.getElementById("welcome");
var winScreen = document.getElementById("win-screen");
var totalScore = document.getElementById("total-score");
var highScores = document.getElementById("high-scores");
var highScoreScreen = document.getElementById("highscore-list");

//---BUTTON FUNCTIONALITY---//
startBtn.addEventListener("click", startGame);
ans1.addEventListener("click", function() {});
ans2.addEventListener("click", function() {});
ans3.addEventListener("click", function() {});
ans4.addEventListener("click", function() {});
resetGame1.addEventListener("click", startGame);
resetGame2.addEventListener("click", startGame);
resetGame3.addEventListener("click", startGame);
highScores.addEventListener("click", highscoreList);

//---GAME FUNCTIONS---//
function startGame() {
  welcomeScreen.classList.add("collapse");
  timeCount.classList.remove("collapse");
  gameOverScreen.classList.add("collapse");
  winScreen.classList.add("collapse");
  highScoreScreen.classList.add("collapse")

  window.timeLeft = 180; //I get the feeling that declaring a global variable inside of a function is really bad
  window.timeInterval = setInterval(function() {
    //I will write code in a simpler/better way next time once I understand better
    timeCount.textContent = "Time: " + timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft <= 0) {
      timeCount.textContent = "";
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
  question1();
}

function gameOver() {
  questionBox.classList.add("collapse");
  gameOverScreen.classList.remove("collapse");
}

function winner() {
  winScreen.classList.remove("collapse");
  questionBox.classList.add("collapse");
  clearInterval(timeInterval);
  totalScore.textContent = timeLeft + 1
}

function highscoreList() {
  winScreen.classList.add("collapse"); // There has to be a better way to do all this hiding/showing (separate html pages?)
  questionBox.classList.add("collapse");
  gameOverScreen.classList.add("collapse");
  welcomeScreen.classList.add("collapse");
  highScoreScreen.classList.remove("collapse")

  var initials = document.getElementById("inlineFormInput").value
  localStorage.setItem(initials)
  localStorage.setItem(totalScore)
}

//---QUESTIONS---//

function question1() {
  wrongAnswer.classList.add("collapse"); // clearing board from previous session
  correctAnswer.classList.add("collapse"); // clearing board from previous session
  questionBox.classList.remove("collapse");
  questionContent.textContent =
    "Which of these is not a keyword in Javascript?";
  ans1.textContent = "var";
  ans2.textContent = "function";
  ans3.textContent = "for";
  ans4.textContent = "banana";

  ans1.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans2.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans3.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans4.onclick = function() {
    correctAnswer.classList.remove("collapse");
    wrongAnswer.classList.add("collapse");
    question2();
  };
}

function question2() {
  questionContent.textContent =
    "Which is the best tool for iterating over an array?";
  ans1.textContent = "hammer";
  ans2.textContent = "DOM targeting";
  ans3.textContent = "for loop";
  ans4.textContent = ".arrayOf()";

  ans1.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans2.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans3.onclick = function() {
    correctAnswer.classList.remove("collapse");
    wrongAnswer.classList.add("collapse");
    question3();
  };
  ans4.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
}

function question3() {
  questionContent.textContent =
    "Why can't I come up with more Javascript questions?";
  ans1.textContent = "My code is distractingly verbose";
  ans2.textContent = "I have no creativity for such quizzical matters";
  ans3.textContent = "It is late in the evening";
  ans4.textContent = "All of the above";

  ans1.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans2.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans3.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans4.onclick = function() {
    correctAnswer.classList.remove("collapse");
    wrongAnswer.classList.add("collapse");
    question4();
  };
}

function question4() {
  questionContent.textContent =
    "Answering four multiple-choice questions is a valid study substitute";
  ans1.textContent = "True";
  ans2.textContent = "False";
  ans3.textContent = "Not with these types of questions";
  ans4.textContent = "The War of 1812";

  ans1.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans2.onclick = function() {
    correctAnswer.classList.remove("collapse");
    wrongAnswer.classList.add("collapse");
    winner();
  };
  ans3.onclick = function() {
    correctAnswer.classList.remove("collapse");
    wrongAnswer.classList.add("collapse");
    winner();
  };
  ans4.onclick = function() {
    correctAnswer.classList.add("collapse");
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
}
