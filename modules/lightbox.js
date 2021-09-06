"use strict";

// DOM Elements --------------------------------------------------------

const lightbox = document.getElementById("lightbox");
const gallery = document.querySelector("#article-gallery-cards");


// Lightbox Events --------------------------------------------------------------

// Launch lightbox
gallery.addEventListener("click", (event) => {

    if (event.target.className === "lightbox-link") {
              
        // take the src and alt data of the cliked picture to use it for the lightbox
        launchLightbox(event.target.tagName,event.target.getAttribute('src'), event.target.getAttribute('alt'))
    }
});


function launchLightbox(tagName, src, alt) {

    // console.log(`${tagName}, ${src}, ${alt}`)
    // output exemple : IMG, /pictures/930/Sport_Next_Hold.jpg, Climber
    // output exemple : VIDEO, /pictures/930/Sport_Tricks_in_the_air.mp4, Tricks in the Air

    let lightboxDOM = "";

    if (tagName === "IMG") {
        lightboxDOM = `<img src="${src}" alt="${alt}">`
    }

    if (tagName === "VIDEO") {
        lightboxDOM = `
            <video controls>
                <source src="${src}" alt="${alt}">
                    Your browser does not support the video tag.
            </video>
        `
    }  
 
    document.getElementById("lightbox-container").innerHTML = lightboxDOM;

    // display the lightbox
    return lightbox.style.display = "block";
}


// close lightbox
document.getElementById("lightbox-closeBtn").addEventListener("click", function () {
    lightbox.style.display = "none";
  });

// ACCESSIBILITY : close lightbox with escape key
document.onkeydown = function (event) {
    if (event.key === 'Escape') {
        lightbox.style.display = "none";
    }
};
