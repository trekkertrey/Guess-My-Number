'use strict';
/*
DOM - Document Object Model: Structured representaiton of HTML documents. Allows javascript to access and manipulate them.

Document is at the head of the DOM tree. needed to select elements
Then HTML, then Head and Body
DOM Trees show the parents and children of elements inside them.

querySelector selects the elements with the selected ID on the html page. selects the entire element <p class = 'message'>Correct Number! </p>

Add textcontent to get only the text in the selected element. Can be used to change content on the webpage
*/
/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;

// .value reads the value from an input option
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// addEventListener waits for whatever event to happen, in this example a click and then performs whatever is instructed
document.querySelector('.check').addEventListener('click', function () {
  //input from html website will alwas be string
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // Refactored code from below
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👇 Too high!' : '☝ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '👇 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   //When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '☝ Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //When guess is correct
  } else {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //What to do when you reset
    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20 + 1);

      displayMessage('Start guessing...');
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';

      document.querySelector('.number').style.width = '15rem';
      document.querySelector('body').style.backgroundColor = '#222';
    });
  }
});
