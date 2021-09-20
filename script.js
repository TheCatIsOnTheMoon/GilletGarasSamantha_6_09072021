//modules
import {displayPhotographers} from "./jsmodules/indexpage.js";
import {filterPhotographers} from "./jsmodules/indexpage.js";
import {photographerPageGenerator} from "./jsmodules/photographerpage.js";
import {displayGallery} from "./jsmodules/gallery.js";
import {sortGallery} from "./jsmodules/sortgallery.js";
import {likeSystem} from "./jsmodules/likesystem.js";

//main
fetch("./json/FishEyeData.json")

  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })

  .then((data) => {

    const photographersData = data.photographers;
    const mediaData = data.media;

    // display the specifics photographers pages
    // get the photographer id in the url and filter data with it
    if (document.URL.includes('photographer-page')) {

      let urlParams = new URLSearchParams(document.location.search.substring(1));
      let urlName = urlParams.get("id");

      let filteredDataPhotographers = photographersData.filter(photographer => photographer.id == urlName);
      let filteredDataMedia = mediaData.filter(media => media.photographerId == urlName);

      photographerPageGenerator(filteredDataPhotographers[0])
      displayGallery(filteredDataMedia)
      sortGallery(filteredDataMedia);
      likeSystem(filteredDataMedia);

      return false
    }

    // gestion of the button return to top when screen is scrolled
    window.onscroll = function () {
      const returnToTopBtn = document.getElementById("index-page-staticBox");

      returnToTopBtn.style.display = "block";
  
      function fadeReturnToTopBtn(){
        returnToTopBtn.style.display = "none";
      };

      setTimeout(function(){ fadeReturnToTopBtn (); }, 5000);
    }

    // Display the main/index page
    filterPhotographers(photographersData);
    return displayPhotographers(photographersData);
  })
  
  .catch(function (error) {
    console.log(error);
  });


