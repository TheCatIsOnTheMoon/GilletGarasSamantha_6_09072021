"use strict";

// DOM Elements --------------------------------------------------------
const modalbg = document.querySelector(".contact-form-bground");
const form = document.getElementById("form");
const mainContent = document.getElementById("main-content");

// Contact Modal Form Events --------------------------------------------

// launch contact modal form
document.getElementById("contact-modal-form-launchBtn").addEventListener("click", function () {
  launchModalForm()
});

// close contact modal form
document.getElementById("closeBtn").addEventListener("click", function () {
  closeModalForm()
});

// ACCESSIBILITY : close contact modal form with escape key ---------------
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModalForm()
  }
});

let isNameValid = false;
let isEmailValid = false;
let isMessageValid = false;

// verify input data when the submit btn is clicked (and when DOM is finished loading)
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-submit").addEventListener("click", () => {
    isNameValid = nameInputValidation();
    isEmailValid = emailInputValidation();
    isMessageValid = messageInputValidation();
  });
});

// lauch the succes message and hide the form ----------------------------
function LaunchSuccesMessage(event) {

  let nameValue = "";
  let emailValue = "";
  let messageValue = "";

  if (
    isNameValid === true &&
    isEmailValid === true &&
    isMessageValid === true
  ) {
    event.preventDefault();

    nameValue = document.getElementById("name").value;
    emailValue = document.getElementById("email").value;
    messageValue = document.getElementById("message").value;

    console.log("name : " + nameValue + ", email : " + emailValue + ", message : " + messageValue);

    form.style.display = "none";
    return (document.getElementById("validation-message").style.display =
      "flex");
  }
}

form.addEventListener("submit", LaunchSuccesMessage, true);

// close modal with the succes message -----------------------------------
document
  .getElementById("close-btn-validation-message")
  .addEventListener("click", function () {
    closeModalForm()
  });


// open & close functions ------------------------------------------
function launchModalForm() {
  modalbg.style.display = "block";
  form.setAttribute('aria-hidden', 'false');
  mainContent.setAttribute('aria-hidden', 'true');
  desactivateBackgroundFocus();
}

function closeModalForm() {
  modalbg.style.display = "none";
  form.setAttribute('aria-hidden', 'true');
  mainContent.setAttribute('aria-hidden', 'false');
  reactivateBackgroundFocus();
}

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
    ) // Regex format: test@test.com
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

function ErrorInputBorder(inputID) {
  inputID.style.borderColor = "#901c1c";
}

function ValidInputBorder(inputID) {
  inputID.style.borderColor = "#ffffff";
}



// modals focus fontions ---------------------------------------------

function desactivateBackgroundFocus() {

  function desactivateFocusElement(element) {
    element.setAttribute("tabindex", "-1");
  }

  desactivateFocusElement(document.querySelector(".logo-fisheye"));
  desactivateFocusElement(document.getElementById("contact-modal-form-launchBtn"));
  desactivateFocusElement(document.getElementById("dropdown-menu-popularity"));
  desactivateFocusElement(document.getElementById("dropdown-menu-date"));
  desactivateFocusElement(document.getElementById("dropdown-menu-title"));

  document.querySelectorAll(".lightbox-link").forEach(element => {
    desactivateFocusElement(element)
  });

  document.querySelectorAll(".photo-caption-likes-heartIcon").forEach(element => {
    desactivateFocusElement(element)
  });
}

function reactivateBackgroundFocus() {

  function activateFocusElement(element) {
    element.setAttribute("tabindex", "0");
  }

  activateFocusElement(document.querySelector(".logo-fisheye"));
  activateFocusElement(document.getElementById("contact-modal-form-launchBtn"));
  activateFocusElement(document.getElementById("dropdown-menu-popularity"));
  activateFocusElement(document.getElementById("dropdown-menu-date"));
  activateFocusElement(document.getElementById("dropdown-menu-title"));

  document.querySelectorAll(".lightbox-link").forEach(element => {
    activateFocusElement(element)
  });

  document.querySelectorAll(".photo-caption-likes-heartIcon").forEach(element => {
    activateFocusElement(element)
  });
}