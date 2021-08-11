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

    return displayPhotographers(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// display the photographers list
function displayPhotographers(photographersData) {
  const photographers = photographersData.photographers;

  let photographersDOM = "";

  photographers.forEach((photographer) => {
    photographersDOM += `
       
            <div class="photographer-card" id="photographer-card-id-${photographer.id}">
            <a href="photographer-page.html">
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
              <ul class="photographer-card-tags">
              ${photographer.tags.map((tag) => {return "<li><a href='#' class='tag'>" + "#" + tag + "</a></li>";})}
                
              </ul>
            </div>
          </div>
       
       `;
  });

  document.getElementById("section-photographers-cards").innerHTML = photographersDOM;
}