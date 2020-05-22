// Ratatouille Quiz
"use strict";

// Event Listener
document.getElementById("checkQuiz").addEventListener("click", checkQuiz);

// Event Function
function checkQuiz() {
  // Get Input Values
  let question1 = document.getElementById("question1").value;
  question1 = question1.toLowerCase();

  let question2 = document.getElementById("question2").value;
  question2 = question2.toLowerCase();

  let question3 = document.getElementById("question3").value;
  question3 = question3.toLowerCase();

  let question4 = document.getElementById("question4").value;
  question4 = question4.toLowerCase();

  // Test input variables change colurs of input background
  let score = 0;

  if (question1 == 2007) {
    document.getElementById("question1").style.backgroundColor = "#77dd77";
    score = score + 1;
  } else {
    document.getElementById("question1").style.backgroundColor = "#FF6961";
  }

  if (question2 == "rat" || question2 == "a rat") {
    document.getElementById("question2").style.backgroundColor = "#77dd77";
    score = score + 1;
  } else {
    document.getElementById("question2").style.backgroundColor = "#FF6961";
  }

  if (question3 == "remy") {
    document.getElementById("question3").style.backgroundColor = "#77dd77";
    score = score + 1;
  } else {
    document.getElementById("question3").style.backgroundColor = "#FF6961";
  }

  if (question4 == "cook") {
    document.getElementById("question4").style.backgroundColor = "#77dd77";
    score = score + 1;
  } else {
    document.getElementById("question4").style.backgroundColor = "#FF6961";
  }

  //Display score
  if (score == 4) {
    document.getElementById("result").innerHTML = "You scored 4/4 (100%)";
    alert("Amazing, you got them all correct!");
  } else if (score == 3) {
    document.getElementById("result").innerHTML = "You scored 3/4(75%)";
    alert("You're almost there! Check what you got wrong.");
  } else if (score == 2) {
    document.getElementById("result").innerHTML = "You scored 2/4 (50%)";
    alert("Good job, you're halfwat there!");
  } else if (score == 1) {
    document.getElementById("result").innerHTML = "You scored 1/4 (25%)";
    alert("It's okay one is better than none...");
  } else if (score == 0) {
    document.getElementById("result").innerHTML = "You scored 0/4 (0%)";
    alert("Wow, you did horrible considering the hints were the answers XD");
  }
}
