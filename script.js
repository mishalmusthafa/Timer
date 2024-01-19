let intervalID;
const timerValue = document.querySelector('.timer');
let timer = 0;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(startTimer, 1000);
  }
}

function startTimer() {
  timer++;
  console.log(timer);
  timerValue.textContent = timer;
}

function stopChange() {
  clearInterval(intervalID);
  intervalID = 0;
}

function resetTimer() {
  timer = 0;
  clearInterval(intervalID);
  intervalID = 0;
  timerValue.textContent = timer;

}



document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);
document.querySelector('#reset').addEventListener('click', resetTimer);