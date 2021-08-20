"use strict";

// DOM Elements --------------------------------------------------------
const modalbg = document.querySelector(".contact-form-bground");
const form = document.getElementById("form");

// Contact Modal Form Events --------------------------------------------------------------

// launch contact modal form
document
  .getElementById("contact-modal-form-launchBtn")
  .addEventListener("click", function () {
    modalbg.style.display = "block";
  });

// close contact modal form
document.getElementById("closeBtn").addEventListener("click", function () {
  modalbg.style.display = "none";
});

// escape key to close modal
document.onkeydown = function(event) {
  event = event || window.event;
  if (event.key == 'Escape' ) {
    modalbg.style.display = "none";
  }
};

// 'keyCode' is deprecated.

// keyName == 'escape'
// keyCode == 27
// KeyboardEvent: key='Escape' | code='Escape'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key