// If the URL of your page is https://example.com/?name=Jonathan&age=18 you could parse out the 'name' and 'age' parameters using:

let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18

// ******************** systeme de like ********************  //

// let likes =
// likes ++

// ******************** gallerie  ********************  //

if (title.match(".jpg")) {
  galleryPicture = document.createElement("DIV");
  galleryPicture.classList.add("photo");
} else if (title.match(".mp4")) {
  galleryVideo = document.createElement("VIDEO");
  galleryVideo.classList.add("video");
}







// ************************ old versions & notes **********************


// ******************** creer le systeme de filtre des tags + affichage ********************  //

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// expected output: Array["exuberant", "destruction", "present"]


filterResult.forEach((photographer) => {

        // console.log(photographer.id) //output : OK

        filterResultIDs.push(photographer.id)
        console.log(filterResultIDs)
      })

      let photographersCards = document.querySelectorAll("photographer-card");

      console.log(photographersCards)

      displayFilterResult(filterResultIDs)      

      function displayFilterResult(filterResultIDs) {
        filterResultIDs.forEach((id) => { 
          photographersCards.forEach((i) => {
            if (!photographersCards[i].classList.contains(id)) {
              photographersCards[i].classList.add("hidden")
            } if (photographersCards[i].classList.contains(id)) {
              photographersCards[i].classList.remove("hidden")
            }
          })
        })        
      } // NOT WORKING







// ******************** creer affichage data index page ********************  //

// import { PhotographerFactory } from "./factory.js";

// ******************* call json file ******************* //
fetch("json/FishEyeData.json")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })

  // ******************* get data from json ******************* //
  .then((data) => {
    this.data = data;
    console.log(this);

    // ******************* construction photographer ******************* //

    const PhotographerFactory = (id) => {
      const name = this.data.photographers[id].name;
      const city = this.data.photographers[id].city;
      const country = this.data.photographers[id].country;
      const tags = this.data.photographers[id].tags;
      const tagline = this.data.photographers[id].tagline;
      const price = this.data.photographers[id].price;
      const portrait = this.data.photographers[id].portrait;
      return {
        GetName: function () {
          return name;
        },
        GetCity: function () {
          return city;
        },
        GetCountry: function () {
          return country;
        },
        GetTags: function () {
          return tags;
        },
        GetTagline: function () {
          return tagline;
        },
        GetPrice: function () {
          return price;
        },
        GetPortrait: function () {
          return portrait;
        },
      };
    };

    // const mimiKeel = PhotographerFactory(0);
    // const ellieRoseWilkens = PhotographerFactory(1);
    // const tracyGalindo = PhotographerFactory(2);
    // const nabeelBradford = PhotographerFactory(3);
    // const rhodeDubois = PhotographerFactory(4);
    // const marcelNikolic = PhotographerFactory(5);

    // *****************  console log tests ******************* //

    console.log(PhotographerFactory(0).GetName());
    // console.log(PhotographerFactory(0).GetId());
    // console.log(PhotographerFactory(0).GetCity());
    // console.log(PhotographerFactory(0).GetCountry());
    // console.log(PhotographerFactory(0).GetTags());
    // console.log(PhotographerFactory(0).GetTagline());
    // console.log(PhotographerFactory(0).GetPrice());
    // console.log(PhotographerFactory(0).GetPortrait());

    // for (let i = 0; i < PhotographerFactory.length; i++) {
    //   let photographerName = PhotographerFactory(i).GetName();
    // }

    // console.log(this);
  })

  // ******************* error ******************* //
  .catch(function () {
    this.dataError = true;
  });

// photographer profile

// const PhotographerProfileData = (i) => {
//   let profilePicture = document.createElement("img");
//   profilePicture.src =
//     "./pictures/Photographers_ID_Photos/" + PhotographerFactory(i).GetPortrait();
//   profilePicture.alt = "portrait " + photographer(i).GetName();
//   profilePicture.classList.add("banner-profilePicture");
// };


// NOT WORKING