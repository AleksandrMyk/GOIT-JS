'use strict';

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body")
};

const colors = [
  "#25468d",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length -1)];
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  }
};

refs.start.addEventListener("click", changeColor.start.bind(changeColor));
refs.stop.addEventListener("click", changeColor.stop.bind(changeColor));