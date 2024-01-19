let intervalID;
const timerValue = document.querySelector('.timer');
let timer = 0;

function startTimer() {
  if (!intervalID) {
    intervalID = setInterval(timerCounting, 1000);
  }
}

function timerCounting() {
  timer++;
  console.log(timer);
  timerValue.textContent = timer;
}

function stopTimer() {
  clearInterval(intervalID);
  intervalID = 0;
}

function resetTimer() {
  timer = 0;
  clearInterval(intervalID);
  intervalID = 0;
  timerValue.textContent = timer;
}

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
document.querySelector('#reset').addEventListener('click', resetTimer);