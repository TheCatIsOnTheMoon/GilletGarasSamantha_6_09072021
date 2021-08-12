// If the URL of your page is https://example.com/?name=Jonathan&age=18 you could parse out the 'name' and 'age' parameters using:

let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18

// ******************** creer la gallerie ********************  //

// ******************** creer le systeme de filtre des tags + affichage ********************  //

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// expected output: Array["exuberant", "destruction", "present"]

// filterResult.forEach((photographer) => {

      //   // console.log(photographer.id) //output : OK

      //   filterResultIDs.push(photographer.id)
      //   console.log(filterResultIDs)
      // })

      // let photographersCards = document.querySelectorAll("photographer-card");

      // console.log(photographersCards)

      // displayFilterResult(filterResultIDs)      

      // function displayFilterResult(filterResultIDs) {
      //   filterResultIDs.forEach((id) => { 
      //     photographersCards.forEach((i) => {
      //       if (!photographersCards[i].classList.contains(id)) {
      //         photographersCards[i].classList.add("hidden")
      //       } if (photographersCards[i].classList.contains(id)) {
      //         photographersCards[i].classList.remove("hidden")
      //       }
      //     })
      //   })        
      // } // NOT WORKING

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