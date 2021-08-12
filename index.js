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

// display the photographers list
function displayPhotographers(photographersData) {
  const photographers = photographersData;

  let photographersDOM = "";

  photographers.forEach((photographer) => {
    photographersDOM += `
       
            <div class="photographer-card">
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


// filter fonction
function filterPhotographers(photographersData) {

  const tags = document.querySelectorAll(".tag");

  let selectTags = [];
  let filterResult = [];
  // let filterResultIDs = [];

  tags.forEach(tag => {
    tag.addEventListener('click', event => {

      // rebase of the select tag
      selectTags = [];

      // console.log(tag.textContent.substring(1)) //output : OK

      // remove "selected" style from all tags
      tags.forEach (tag => {
        tag.classList.remove ("selected-tag") //output : OK
      })

      // add "selected" style to the clicked one
      tag.classList.add ("selected-tag") // output : OK

      // remove the "#" in front of the tag
      selectTags.push(tag.textContent.substring(1))

      // console.log(selectTags) //output : OK

      // filter photograph data to find those who includes the selected tag
      selectTags.forEach(tag => {
        filterResult = photographersData.filter(photographer => photographer.tags.includes(tag))
      })

      // console.log(filterResult) // output : ok

      // relaunch the display function but with omly the filtered ones
      displayPhotographers(filterResult);
    })
  });
}