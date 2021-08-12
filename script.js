import { displayPhotographers } from "./modules/indexpage.js";
import { filterPhotographers } from "./modules/indexpage.js";
// import { photographerPageGenerator } from "./modules/photographerpage.js";

"use strict";

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

    filterPhotographers(photographersData);
    return displayPhotographers(photographersData);
  })
  .catch(function (error) {
    console.log(error);
  });