// display the photographers list
export function displayPhotographers(photographersData) {

  const photographers = photographersData;

  // console.log(photographers) //output : OK

  let indexPhotographersDOM = "";

  photographers.forEach((photographer) => {
    indexPhotographersDOM += `
         
              <div class="photographer-card">

              <a href="photographer-page.html?id=${photographer.id}" tabindex="0">
                <figure class="photographer-card-picture">
                  <img src= pictures/Photographers_ID_Photos/${photographer.portrait} alt= ${photographer.portrait} />
                </figure>
                <figcaption class="photographer-card-name">
                  <h2>${photographer.name}</h2>
                </figcaption>
              </a>
              <div>
                <h3 class="photographer-card-location">${photographer.city}, ${photographer.country}</h3>
                <p class="photographer-card-tagLine">${photographer.tagline}</p>
                <p class="photographer-card-price">${photographer.price}€ /jour</p>
                <ul class="photographer-card-tags" role='list'>

                ${photographer.tags.map((tag) => {return "<li><a href='#' class='tag' tabindex='0' data-name='" + tag + "'>" + "#" + tag + "</a></li>";}).join(' ')}


                </ul>
              </div>
            </div>
         
    `;

  });
  //  after .map(), .join(' ') is here to delete the coma between each li element

  document.getElementById("section-photographers-cards").innerHTML = indexPhotographersDOM;
}


// filter the photographers by tag when clicked and display accordingly

export function filterPhotographers(photographersData) {

  let selectedTag = "";

  const navigation = document.querySelector("#nav-photographer-categories");
  const photographersCards = document.querySelector("#section-photographers-cards");

  document.addEventListener("click", (event) => {

    if (event.target !== navigation && event.target !== photographersCards) {
      // specificPhotographer(event.target?.dataset?.name);

      selectedTag = event.target?.dataset?.name;
      specificPhotographer(selectedTag)
      tagStylisation(selectedTag)
    }

    return displayPhotographers(photographersData);;

  });

  function tagStylisation(selectedTag) {
    // console.log(selectedTag); //output : OK

    document.querySelectorAll(".tag").forEach(element => {
      let tag = element.dataset.name;
      // console.log(tag); //output : OK

      if (tag == selectedTag) {
        element.classList.add("selected-tag")
      } else {
        element.classList.remove("selected-tag")
      }
    });
  }

  function specificPhotographer(tagName) {
    // console.log(tagName); //output : OK
    let filterResult = [];

    filterResult = photographersData.filter(photographer => photographer.tags.includes(tagName));
    // console.log(filterResult); //output : OK

    // relaunch the display function but with omly the filtered ones
    displayPhotographers(filterResult);
  }

}