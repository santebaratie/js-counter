"use strict";

// Select UI elements
const plusBtn = document.querySelector(".fa-plus");
const minusBtn = document.querySelector(".fa-minus");
const resetBtn = document.querySelector(".btn--reset");
const autoCountBtn = document.querySelector(".btn--auto");
const lowerLimitInput = document.querySelector("#lower-limit");
const upperLimitInput = document.querySelector("#upper-limit");
const inputFields = document.querySelectorAll("input");
const counterTxt = document.querySelector(".counter");

// Initiate global variables;

let counter = 0;

// Set the upper and lower limits when page loaded

window.addEventListener("DOMContentLoaded", (e) => {
  lowerLimitInput.value = 0;
  upperLimitInput.value = 10;
});

// Increment the counter when plus button clicked

plusBtn.addEventListener("click", (e) => {
  if (counter < upperLimitInput.value) {
    counter++;
    counterTxt.textContent = counter;
  }
});

// Decrement the counter when minus button clicked

minusBtn.addEventListener("click", (e) => {
  if (counter > lowerLimitInput.value) {
    counter--;
    counterTxt.textContent = counter;
  }
});

// Reset the counter on reset button click

resetBtn.addEventListener("click", () => {
  if (intervalID) {
    clearInterval(intervalID);
  }
  counter = 0;
  counterTxt.textContent = counter;
  autoCountBtn.addEventListener("click", handleAutoCountBtnClick, {once: true})
});

// Restrict to only numbers in input fields

Array.from(inputFields).forEach((input) => {
  input.addEventListener("keyup", (e) => {
    input.value = input.value.replace(/[^0-9]/g, "");
    counter = lowerLimitInput.value;
    counterTxt.textContent = counter;
  });
});

// Increment counter when auto count clicked;

let intervalID;

function handleAutoCountBtnClick() {
  let upperLimit = upperLimitInput.value;
  intervalID = setInterval(() => {
    if (counter < upperLimit) {
      counter++;
      counterTxt.textContent = counter;
    } else {
      clearInterval(intervalID);
    }
  }, 1000);

  autoCountBtn.addEventListener("dblclick", () => {
    clearInterval(intervalID);
    autoCountBtn.addEventListener("click", handleAutoCountBtnClick, { once: true });
  });
}

autoCountBtn.addEventListener("click", handleAutoCountBtnClick, { once: true });
