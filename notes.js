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






// filter fonction
function filterPhotographers(photographersData) {

  const tags = document.querySelectorAll(".tag");

  let selectTags = [];
  let filterResult = [];

  tags.forEach(tag => {
    tag.addEventListener('click', event => {

      // console.log(tag.textContent.substring(1)) //output : OK

      selectTags.push(tag.textContent.substring(1))

      // console.log(selectTags) //output : OK

      selectTags.forEach(tag => {
        filterResult = photographersData.photographers.filter(photographer => photographer.tags.includes(tag)) 
      }) 

      // console.log(filterResult) // output : good when 1 tag is selcted but only present result of the last selcted tag
      
      filterResult.forEach((photographer) => {
        // console.log(photographer.id) //output : OK
        filterResult = photographer.id
        // console.log(filterResult)
      })

      // recuperer les id des carte photographe

      let photographersCard = document.querySelectorAll("photographer-card");

      // photographersCard.forEach( element => )

      if (photographersCard.id.includes(filterResult)) {
        photographersCard.classList.remove("hidden")
      } else {
        photographersCard.classList.add("hidden")
      }

      // output : Uncaught TypeError: photographersCard.id is undefined

    })
  });
}



filterPhotographers(data);