'use strict';

const btnCheck = document.querySelector(`.check`);
const btnAgain = document.querySelector(`.again`);
const cpuMessage = document.querySelector(`.message`);
const userScore = document.querySelector(`.score`);
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let userGuess;
let highScore = 0;

//exists to show secret number for the time being
document.querySelector(`.number`).textContent = `?`;

//Necessary Functions
const checkAnswer = function (userGuess, secretNumber) {
  //No input
  if (!userGuess) {
    cpuMessage.textContent = '⛔ No Number!';
  }
  //Wrong input
  else if (userGuess !== secretNumber) {
    if (score > 1) {
      cpuMessage.textContent =
        userGuess > secretNumber ? `👇 Too High!` : `👆 Too Low!`;
      score--;
      userScore.textContent = score;
    } else {
      cpuMessage.textContent = `😐 You lose!`;
      score--;
      userScore.textContent = score;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`body`).style.backgroundColor = '#c40a0a';
      btnCheck.classList.add(`hidden`);
    }
  }
  //Correct input
  else {
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = score;
    }
    cpuMessage.textContent = `🎉 Correct Answer!`;
    document.querySelector(`body`).style.backgroundColor = '#16c40a';
    document.querySelector('.number').style.width = '30rem';
  }
};

//Button functionality
//Check button should compare the user entered number to the secret number
btnCheck.addEventListener('click', function () {
  //Save user input
  userGuess = Number(document.querySelector(`.guess`).value);

  //Call check function
  checkAnswer(userGuess, secretNumber);
});

// Again button should reset all variables and restart the game
btnAgain.addEventListener(`click`, function () {
  console.log(`Again button was pressed.`);

  score = 20;
  userScore.textContent = score;
  btnCheck.classList.remove(`hidden`);
  document.querySelector(`.guess`).value = ``;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector('.number').style.width = '30rem';
  document.querySelector(`body`).style.backgroundColor = '#222';
});
