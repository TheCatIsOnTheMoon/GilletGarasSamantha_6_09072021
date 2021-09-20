//modules
import {displayPhotographers} from "./modules/indexpage.js";
import {filterPhotographers} from "./modules/indexpage.js";
import {photographerPageGenerator} from "./modules/photographerpage.js";
import {displayGallery} from "./modules/gallery.js";
import {sortGallery} from "./modules/sortgallery.js";
import {likeSystem} from "./modules/likesystem.js";

//main
fetch("./FishEyeData.json")

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

    // Display the main/index page
    filterPhotographers(photographersData);
    return displayPhotographers(photographersData);
  })
  
  .catch(function (error) {
    console.log(error);
  });
