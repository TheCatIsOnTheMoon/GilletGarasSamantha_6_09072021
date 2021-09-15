import {
  displayPhotographers
} from "./modules/indexpage.js";
import {
  filterPhotographers
} from "./modules/indexpage.js";
import {
  photographerPageGenerator
} from "./modules/photographerpage.js";
import {
  displayGallery
} from "./modules/gallery.js";


// fetch data
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

    // get the photographer id in the url and filter data with it
    if (document.URL.includes('photographer-page')) {

      let urlParams = new URLSearchParams(document.location.search.substring(1));
      let urlName = urlParams.get("id");

      let filteredDataPhotographers = photographersData.filter(photographer => photographer.id == urlName);
      let filteredDataMedia = mediaData.filter(media => media.photographerId == urlName);

      photographerPageGenerator(filteredDataPhotographers[0])
      return displayGallery(filteredDataMedia)
    }

    if (document.URL.includes('index')) {

      filterPhotographers(photographersData);
      return displayPhotographers(photographersData);
    }

    return false
  })
  
  .catch(function (error) {
    console.log(error);
  });



  // TO DO to finish :

  // accessibility stuff :

    // focus modal for keybord navigation : 
          // ref : https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
    // focus menu deroulant tris

  //CSS Stuff :

    // barres de separation blanche dans menu deroulant
    // button "passer au contenu" uniquement quand scroll
    // better gallery display with calc use

  // Bug resolution :

    //liking not working anymore after triage function

  // final touch :
    // html/css verif
    // access auto verif
    // test screen reader