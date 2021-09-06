import { displayPhotographers } from "./modules/indexpage.js";
import { filterPhotographers } from "./modules/indexpage.js";
import { photographerPageGenerator } from "./modules/photographerpage.js";
import { displayGallery } from "./modules/gallery.js";

// "use strict"; // only when not in a module

// fetch data
fetch("./FishEyeData.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    // console.log(response);
    return response.json();
  })
  .then((data) => {

        // console.log(data);

    const photographersData = data.photographers;
    const mediaData = data.media;

        // get the photographer id in the url and filter data with it
    if (document.URL.includes('photographer-page')) {

      let urlParams = new URLSearchParams(document.location.search.substring(1));
      let urlName = urlParams.get("id");
      
      let filteredDataPhotographers = photographersData.filter(photographer => photographer.id == urlName);
      let filteredDataMedia = mediaData.filter(media => media.photographerId == urlName);

      photographerPageGenerator(filteredDataPhotographers[0])
      displayGallery(filteredDataMedia)

    } else {

      filterPhotographers(photographersData);
      displayPhotographers(photographersData);

    }

    // 
    
    return false
  })
  .catch(function (error) {
    console.log(error);
  });

