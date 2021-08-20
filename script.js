import { displayPhotographers } from "./modules/indexpage.js";
import { filterPhotographers } from "./modules/indexpage.js";
import { photographerPageGenerator } from "./modules/photographerpage.js";

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

    if (document.URL.includes('photographer-page')) {

      photographerPageGenerator(photographersData[0])

    }
    else {

      filterPhotographers(photographersData);
      displayPhotographers(photographersData);

    }

    // 
    
    return false
  })
  .catch(function (error) {
    console.log(error);
  });


  // likes count /////////////////////////////////

  // gallery ///////////////////////////////

