const timerValue = document.querySelector('.timer');
let timer = 0;
let intervalID;
const timerStatus = document.getElementById('timer-status');
let timerStarted = false;

function startTimer(e) {
  timerStarted = true;
  ChangingHeadingTimer('Started');
  if (!intervalID) {
    intervalID = setInterval(timerCounting, 1000);
  }
}

// Function for start pause and reset 
function timerCounting() {
  timer++;
  timerValue.textContent = timer;
}

function stopTimer() {
  clearInterval(intervalID);
  intervalID = 0;
  ChangingHeadingTimer('Paused');
}

function resetTimer() {
  clearInterval(intervalID);
  intervalID = 0;
  timerValue.textContent = timer;
  ChangingHeadingTimer('Reset');
  timerStarted = false;
  timer = 0;
}

// Function timer status
function ChangingHeadingTimer(status) {
  if (timerStarted === true) {
    timerStatus.textContent = status;
  }
}

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
document.querySelector('#reset').addEventListener('click', resetTimer);