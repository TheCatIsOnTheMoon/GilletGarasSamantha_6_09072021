import {displayGallery} from "./gallery.js";

export function sortGallery(galleryData) {

    let sortedData = "";

    document.getElementById("dropdown-menu-popularity").addEventListener("click", function () {

        console.log("sort by popularity")

        sortedData = galleryData.sort((a, b) => a.likes < b.likes);

        console.log(sortedData)

        displayGallery(sortedData)
    });

    document.getElementById("dropdown-menu-date").addEventListener("click", function () {

        console.log("sort by date")

        sortedData = galleryData.sort((a, b) => a.date > b.date);

        console.log(sortedData)

        displayGallery(sortedData)
    });

    document.getElementById("dropdown-menu-title").addEventListener("click", function () {

        console.log("sort by title")

        sortedData = galleryData.sort((a, b) => a.title > b.title);

        console.log(sortedData)
        
        displayGallery(sortedData)
    });
}

// REF : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort