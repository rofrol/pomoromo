navigator.serviceWorker.register("sw.js");

function notification() {
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Time is up!");
      });
    }
  });
}

let interval;
let timer = 0;

function startTimer(duration, display, callback) {
  clearInterval(interval);
  if (timer === 0) timer = duration;
  startpause.textContent = "Pause";
  startpause.onclick = pauseTimer;
  interval = setInterval(function () {
    display.textContent = formatSeconds(timer);
    if (--timer < 0) {
      clearInterval(interval);
      callback();
    }
  }, 1000);
}

const formatSeconds = (timer) => {
  const minutes = parseInt(timer / 60, 10)
    .toString()
    .padStart(2, "0");
  const seconds = parseInt(timer % 60, 10)
    .toString()
    .padStart(2, "0");
  return minutes + ":" + seconds;
};

const pauseTimer = () => {
  clearInterval(interval);
  startpause.textContent = "Start";
  startpause.onclick = () => startTimer(timer, display, notification);
};

const resetTimer = () => {
  clearInterval(interval);
  startpause.textContent = "Start";
  startpause.onclick = () => startTimer(pomodoroTime, display, notification);
  timer = 0;
  display.textContent = formatSeconds(pomodoroTime);
};

const startPomodoro = () => {
  timer = 0;
  startTimer(pomodoroTime, display, notification);
};

const startBreak = () => {
  timer = 0;
  startTimer(breakTime, display, notification);
};

const pomodoroTime = 60 * 25;
const breakTime = 60 * 5;
const display = document.querySelector("#time");
const startpause = document.querySelector("#startpause");
window.startTimer = startPomodoro;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;
window.interval = interval;
window.startPomodoro = startPomodoro;
window.startBreak = startBreak;
