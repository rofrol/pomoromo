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

function startTimer(duration, display, callback) {
  var timer = duration,
    minutes,
    seconds;
  const interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      callback();
    }
  }, 1000);
}

const seconds = 60 * 25;
const display = document.querySelector("#time");
window.startTimer = () => startTimer(seconds, display, notification);
