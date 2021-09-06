"use strict";

// DOM Elements --------------------------------------------------------

const lightbox = document.getElementById("lightbox");
const gallery = document.querySelector("#article-gallery-cards");


// Lightbox Events --------------------------------------------------------------

// Launch lightbox
gallery.addEventListener("click", (event) => {

    // only act if target have the proper class "lightbox-link"
    if (event.target.className === "lightbox-link") {
      
        
        // take the src and alt data of the cliked picture to use it for the lightbox
        launchLightbox(event.target.tagName,event.target.getAttribute('src'), event.target.getAttribute('alt'))
    }

    // console.log(event.target.tagName) // output : IMG or VIDEO
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


//         // const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')

//         // gallery.forEach(link => link.addEventListener('click', e => {
//         //     e.preventDefault()
//         //     new Lightbox(e.currentTarget.getAttribute('href'))
//         // }))

// // param : image url
// constructor(url) {
//     const element = this.buildDOM(url)
//     document.body.appendChild(element)
// }

// buildDOM(url) {
//     const dom = document.createElement('div')
//     dom.classList.add('lightbox')
//     dom.innerHTML = `

//             <div class="lightbox">

//                 <button class="lightbox-close" aria-label="Fermer">
//                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
//                 </button>

//                 <button class="lightbox-prev" aria-label="Précédent">
//                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
//                 </button>

//                 <button class="lightbox-next" aria-label="Suivant">
//                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
//                 </button>

//                 <div class="lightbox-container">
//                     <div class="lightbox-loader"></div>
//                 </div>

//             </div>

//         `
//     return dom
// }


// // Lightbox.init()