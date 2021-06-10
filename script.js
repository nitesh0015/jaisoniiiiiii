'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'congratulations';
const a = function () {
  console.log(33);
};*/
let score = 20;
let high = 0;
var secret = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secret;
console.log(secret);

//document.querySelector('.again').addEventListener('click', function () {
document.querySelector('.again').addEventListener('click', function () {
  score = '20';
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing1';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to right top, #cecccd, #dcebe0, #b7f3d5, #6f3a8e, #6947b9, #6942b2, #683cab, #6737a4, #61216c, #e6e2be, #b8dfdd, #b6aeae)';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 🛑';
  } else if (guess === secret) {
    document.querySelector('.message').textContent =
      '🎉Congratulation you won 😎';
    document.querySelector('.number').textContent = secret;
    if (score > high) {
      high = score;
    }
    document.querySelector('.highscore').textContent = high;

    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to right top, #060506, #1f1224, #301a41, #3a2563, #3b328a, #394aa9, #2d63c9, #007de8, #00a1fa, #00c2fe, #00e0f9, #5ffbf1)';
    document.querySelector('body').style.fontSize = '500';
    document.querySelector('body').style.fontStyle = 'none';
    document.querySelector('body').style.letterSpacing = '2px';
    document.querySelector('body').style.borderRadius = '8px';
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});
