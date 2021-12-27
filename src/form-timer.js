import render from "./common.js";
import { buildTimer, startTimer, stopTimer } from "./timer.js";

const formTimer = document.querySelector("#form-timer");
let timeString = "";

formTimer.addEventListener("submit", (event) => {
  event.preventDefault();

  timeString = event.target.elements.timeSet.value;
  console.log(timeString);

  if (!timeString) {
    render("Введите значение времени");
    return;
  }

  buildTimer(timeString);
  startTimer();
});

formTimer.addEventListener("reset", (event) => {
  event.preventDefault();
  stopTimer();
});
