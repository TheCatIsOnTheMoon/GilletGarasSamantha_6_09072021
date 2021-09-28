import {displayGallery} from "./gallery.js";

export function sortGallery(galleryData) {

    // REF : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    let sortedData = "";

    document.getElementById("dropdown-menu-popularity").addEventListener("click", function () {

        //sortedData = galleryData.sort((a, b) => a.likes < b.likes);
        //this way was working perfectly on firefox but not on chrome, so more consistent way describe in :
        //https://stackoverflow.com/questions/1969145/sorting-javascript-array-with-chrome

        sortedData = galleryData.sort(function( a , b ){
            let result = a.likes == b.likes ? 0 : a.likes > b.likes ? -1 : 1
            if(result === 0)
            {
            }
            return result ;
        });

        displayGallery(sortedData)
    });

    document.getElementById("dropdown-menu-date").addEventListener("click", function () {

        //sortedData = galleryData.sort((a, b) => a.date > b.date);
        //idem than prec

        sortedData = galleryData.sort(function( a , b ){
            let result = a.date == b.date ? 0 : a.date < b.date ? -1 : 1
            if(result === 0)
            {
            }
            return result ;
        });

        displayGallery(sortedData)
    });

    document.getElementById("dropdown-menu-title").addEventListener("click", function () {

        //sortedData = galleryData.sort((a, b) => a.title > b.title);
        //idem than prec

        sortedData = galleryData.sort(function( a , b ){
            let result = a.title == b.title ? 0 : a.title < b.title ? -1 : 1
            if(result === 0)
            {
            }
            return result ;
        });
        
        displayGallery(sortedData)
    });
}