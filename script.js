'use strict';
var score = 20;
var highscore = 0;
let randomNum = Math.trunc(Math.random() * 20 + 1);
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').onclick = function () {
  const inputNum = Number(document.querySelector('.guess').value);
  console.log(inputNum, typeof inputNum);
  if (!inputNum) {
    displayMessage(' 🤦‍♂️ Enter a Num ');
  } else if (randomNum === inputNum) {
    document.querySelector('.number').textContent = randomNum;
    displayMessage('🤯 WOW .. Correct !! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (randomNum > inputNum) {
    displayMessage('📉 Too Low !');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 Game Over !! ');
      document.querySelector('.score').textContent = 0;
    }
  } else if (randomNum < inputNum) {
    displayMessage('📈 Too High !');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 Game Over !! ');
      document.querySelector('.score').textContent = 0;
    }
  }
};
document.querySelector('.again').onclick = function () {
  score = 20;
  randomNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage(' Start guessing...');
  document.querySelector('.score').textContent = score;
  if (inputNum === randomNum) {
    document.querySelector('.number').textContent = randomNum;
  }
};
