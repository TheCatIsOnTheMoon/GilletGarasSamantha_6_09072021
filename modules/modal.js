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
