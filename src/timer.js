const timeEl = document.querySelector("#time");

let lastHours = 0;
let lastMinutes = 0;
let lastSeconds = 0;
let diff = 0;

export function buildTimer(timeString) {
  let hours = parseInt(timeString.slice(0, 2));
  let minutes = parseInt(timeString.slice(3, 5));
  let seconds = 0;
  console.log(hours, minutes, seconds);
  diff = Math.abs(
    hours * 3600 +
      minutes * 60 +
      seconds -
      new Date().getHours() * 3600 -
      new Date().getMinutes() * 60 -
      new Date().getSeconds()
  );

  lastHours = Math.trunc(diff / 3600);
  console.log("lastHours ", lastHours);
  lastMinutes = Math.trunc((diff - 3600 * lastHours) / 60);
  console.log("lastMinutes ", lastMinutes);
  lastSeconds = diff - 3600 * lastHours - 60 * lastMinutes;
  console.log("lastSeconds ", lastSeconds);
}

export function startTimer() {
  let timerId = setInterval(decreaseTime, 1000);
  setTime(lastHours, lastMinutes, lastSeconds);

  function decreaseTime() {
    let currentHours = 0;
    let currentMinutes = 0;
    let currentSeconds = 0;
    console.log(lastHours, lastMinutes, lastSeconds, "diff ", diff);
    if (lastHours === 0 && lastMinutes === 0 && lastSeconds === 0) {
      clearInterval(timerId);
    } else {
      if (lastMinutes === 0 && lastSeconds === 0) {
        currentHours = --lastHours;
        currentMinutes = 59;
        lastSeconds = 60;
      } else if (lastSeconds === 0) {
        currentHours = lastHours;
        currentMinutes = --lastMinutes;
        lastSeconds = 60;
      } else {
        currentHours = lastHours;
        currentMinutes = lastMinutes;
      }
      currentSeconds = --lastSeconds;

      setTime(currentHours, currentMinutes, currentSeconds);
    }
  }
}

function setTime(value1, value2, value3) {
  if (value1 < 10) {
    value1 = `0${value1}`;
  }
  if (value2 < 10) {
    value2 = `0${value2}`;
  }
  if (value3 < 10) {
    value3 = `0${value3}`;
  }

  timeEl.innerHTML = `${value1}:${value2}:${value3}`;
}
export function stopTimer() {
  setTime(0, 0, 0);
  lastHours = 0;
  lastMinutes = 0;
  lastSeconds = 0;
}
