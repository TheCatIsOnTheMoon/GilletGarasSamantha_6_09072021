"use strict";

// DOM Elements --------------------------------------------------------
const modalbg = document.querySelector(".contact-form-bground");
const form = document.getElementById("form");

// Contact Modal Form Events --------------------------------------------------------------

// launch contact modal form
document.getElementById("contact-modal-form-launchBtn").addEventListener("click", function () {
    modalbg.style.display = "block";
  });

// close contact modal form
document.getElementById("closeBtn").addEventListener("click", function () {
  modalbg.style.display = "none";
});

// ACCESSIBILITY : close contact modal form with escape key --------------------------
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' ) {
    modalbg.style.display = "none";
  }
});

// 'keyCode' is deprecated.

// keyName == 'escape'
// keyCode == 27
// KeyboardEvent: key='Escape' | code='Escape'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key


// initialize variables to stock verification results
let isNameValid = false;
let isEmailValid = false;
let isMessageValid = false;

// verify input data when the submit btn is clicked (and when DOM is finished loading)
// stock the verification into variables
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-submit").addEventListener("click", () => {
    isNameValid = nameInputValidation();
    isEmailValid = emailInputValidation();
    isMessageValid = messageInputValidation();
  });
});

// function to lauch the succes message and hide the form
// with condition that all the variables are true and prevent default form submit action
function LaunchSuccesMessage(event) {
  if (
    isNameValid === true &&
    isEmailValid === true &&
    isMessageValid === true
  ) {
    event.preventDefault();
    form.style.display = "none";
    return (document.getElementById("validation-message").style.display =
      "flex");
  }
}

// attach event listener to lauch the succes message (needs to be after the related function)
form.addEventListener("submit", LaunchSuccesMessage, true);

// close modal with the succes message
document
  .getElementById("close-btn-validation-message")
  .addEventListener("click", function () {
    modalbg.style.display = "none";
  });


// validation functions -------------------------------------------------------

// name
function nameInputValidation() {
  const name = document.getElementById("name");
  const nameError = document.getElementById("name-error-message");
  if (name.value.length < 2 || name.value === "") {
    ErrorInputBorder(name);
    nameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    return false;
  }
  ValidInputBorder(name);
  nameError.innerHTML = "";
  return true;
}

// email
function emailInputValidation() {
  const email = document.getElementById("email");
  const emailError = document.getElementById("email-error-message");
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email.value
    ) // Regex to match a valid email address. ex: test@test.com
  ) {
    ErrorInputBorder(email);
    emailError.innerHTML = "Veuillez entrer un E-mail valide";
    return false;
  }
  ValidInputBorder(email);
  emailError.innerHTML = "";
  return true;
}

// message
function messageInputValidation() {
  const message = document.getElementById("message");
  const messageError = document.getElementById("message-error-message");
  if (message.value.length < 2 || message.value === "") {
    ErrorInputBorder(message);
    messageError.innerHTML = "Veuillez entrer un message";
    return false;
  }
  ValidInputBorder(message);
  messageError.innerHTML = "";
  return true;
}

// error border functions -------------------------------------------------------

// Add a red border to a non valid input
function ErrorInputBorder(inputID) {
  inputID.style.borderColor = "#901c1c";
}

// remove border from valid input
function ValidInputBorder(inputID) {
  inputID.style.borderColor = "#ffffff";
}
