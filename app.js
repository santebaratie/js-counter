"use strict";

// Select UI elements
const plusBtn = document.querySelector(".fa-plus");
const minusBtn = document.querySelector(".fa-minus");
const resetBtn = document.querySelector(".btn--reset");
const autoCountBtn = document.querySelector(".btn--auto");
const lowerLimitInput = document.querySelector("#lower-limit");
const upperLimitInput = document.querySelector("#upper-limit");


// Initiate global variables;

let counter = 0;

// Set the upper and lower limits when page loaded

window.addEventListener("DOMContentLoaded", (e) => {
  lowerLimitInput.value = 0;
  upperLimitInput.value = 100;
})


