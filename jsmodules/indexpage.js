export function displayPhotographers(photographersData) {

  const photographers = photographersData;
  let indexPhotographersDOM = "";

  photographers.forEach((photographer) => {
    indexPhotographersDOM += `
         
              <div class="photographer-card">
              <a href="photographer-page.html?id=${photographer.id}" tabindex="0">
                <figure class="photographer-card-picture">
                  <img src= img/Photographers_ID_Photos/${photographer.portrait} alt= "portrait de ${photographer.name}" />
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

  document.addEventListener("click", (event) => {

    if (event.target.className === "tag") {
      selectedTag = event.target?.dataset?.name;
      specificPhotographer(selectedTag)
      tagStylisation(selectedTag)
    }

    return false;;
  });

  function tagStylisation(selectedTag) {

    document.querySelectorAll(".tag").forEach(element => {

      let tag = element.dataset.name;

      if (tag === selectedTag) {
        element.classList.add("selected-tag")
      } else {
        element.classList.remove("selected-tag")
      }
    });
  }

  function specificPhotographer(tagName) {

    let filterResult = [];

    filterResult = photographersData.filter(photographer => photographer.tags.includes(tagName));

    // relaunch the display function but with only the filtered ones
    return displayPhotographers(filterResult);
  }
}