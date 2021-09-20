import {displayGallery} from "./gallery.js";

export function sortGallery(galleryData) {

    let sortedData = "";

    document.getElementById("dropdown-menu-popularity").addEventListener("click", function () {
        sortedData = galleryData.sort((a, b) => a.likes < b.likes);
        displayGallery(sortedData)
    });

    document.getElementById("dropdown-menu-date").addEventListener("click", function () {
        sortedData = galleryData.sort((a, b) => a.date > b.date);
        displayGallery(sortedData)
    });

    document.getElementById("dropdown-menu-title").addEventListener("click", function () {
        sortedData = galleryData.sort((a, b) => a.title > b.title);
        displayGallery(sortedData)
    });
}

// REF : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort