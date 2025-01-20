"use strict";

// Select UI elements
const plusBtn = document.querySelector(".fa-plus");
const minusBtn = document.querySelector(".fa-minus");
const resetBtn = document.querySelector(".btn--reset");
const autoCountBtn = document.querySelector(".btn--auto");
const lowerLimitInput = document.querySelector("#lower-limit");
const upperLimitInput = document.querySelector("#upper-limit");
const counterTxt = document.querySelector(".counter");

// Initiate global variables;

let counter = 0;

// Set the upper and lower limits when page loaded

window.addEventListener("DOMContentLoaded", (e) => {
  lowerLimitInput.value = 0;
  upperLimitInput.value = 10;
})

// Increment the counter when plus button clicked

plusBtn.addEventListener("click", (e) => {
  if(counter < upperLimitInput.value){
    counter++;
    counterTxt.textContent = counter;
  }
})

// Decrement the counter when minus button clicked

minusBtn.addEventListener("click", (e) => {
  if(counter > lowerLimitInput.value){
    counter--;
    counterTxt.textContent = counter;
  }
})


// Reset the counter on reset button click

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterTxt.textContent = counter;
})