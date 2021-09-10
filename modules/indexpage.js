// display the photographers list
export function displayPhotographers(photographersData) {
  
    const photographers = photographersData;

    // console.log(photographers) //output : OK
  
    let indexPhotographersDOM = "";
  
    photographers.forEach((photographer) => {
      indexPhotographersDOM += `
         
              <div class="photographer-card">

              <a href="photographer-page.html?id=${photographer.id}">
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

                ${photographer.tags.map((tag) => {return "<li><a href='#' class='tag' data-name='" + tag + "'>" + "#" + tag + "</a></li>";}).join(' ')}


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

  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining

  document.addEventListener("click", (event)=>{
  
    if(event.target !== navigation && event.target !== photographersCards){

      // specificPhotographer(event.target?.dataset?.name);

      selectedTag = event.target?.dataset?.name;  
      
      specificPhotographer(selectedTag)
      tagStylisation(selectedTag)
    }
  
    return false;

  });


  function tagStylisation(selectedTag) {

    // console.log(selectedTag); //output : OK

    document.querySelectorAll(".tag").forEach(element => {

      let tag = element.dataset.name;

      // console.log(tag); //output : OK

      if (tag == selectedTag) {
        element.classList.add ("selected-tag")
      }
      else {
        element.classList.remove ("selected-tag")
      }
    })
    
    
  }


  function specificPhotographer(tagName){

    // console.log(tagName); //output : OK

    let filterResult = [];

    filterResult = photographersData.filter(photographer => photographer.tags.includes(tagName));

    // console.log(filterResult); //output : OK

    // relaunch the display function but with omly the filtered ones
      displayPhotographers(filterResult);

  }

}


  // OLD WAY WITH 2 FUNCTIONS ////////////////////////////////////////////////////////////////////////

  // document.querySelector("#nav-photographer-categories").addEventListener("click", (event)=>{
  
  //   if(event.target !== event.currentTarget){

  //     // specificPhotographer(event.target?.dataset?.name);

  //     selectedTag = event.target?.dataset?.name;  
      
  //     specificPhotographer(selectedTag)
  //     tagStylisation(selectedTag)
  //   }
  
  //   return false;

  // });

  // document.querySelector("#section-photographers-cards").addEventListener("click", (event)=>{
  
  //   if(event.target !== event.currentTarget){   
      
  //     selectedTag = event.target?.dataset?.name;  

  //     specificPhotographer(selectedTag)
  //     tagStylisation(selectedTag)
  //   }
  
  //   return false;

  // });



//   EXEMPLE : event bubbling ///////////////////////////////////////////////////////////////////////////////////////

// The event is always managed by the most specific element, so you can immediately check if that’s one of the elements that should handle the event:

// const element1 = document.querySelector('.a-class')
// const element2 = document.querySelector('.another-class')

// body.addEventListener('click', event => {
//   if (event.target !== element1 && event.target !== element2) {
//     return
//   }
//   //handle click
// }



// filter photographers OLD VERSION ///////////////////////////////////////////////////////////////////////////////

// export function filterPhotographers(photographersData) {

//   const tags = document.querySelectorAll(".tag");
//   let selectTags = [];
//   let filterResult = [];
//   // let filterResultIDs = [];

//   tags.forEach(tag => {
//     tag.addEventListener('click', event => {

//       // rebase of the select tag
//       selectTags = [];

//       // console.log(tag.textContent.substring(1)) //output : OK

//       // remove "selected" style from all tags
//       tags.forEach (tag => {
//         tag.classList.remove ("selected-tag") //output : OK
//       })

//       // add "selected" style to the clicked one
//       tag.classList.add ("selected-tag") // output : OK

//       // remove the "#" in front of the tag
//       selectTags.push(tag.textContent.substring(1))

//       // console.log(selectTags) //output : OK

//       // filter photograph data to find those who includes the selected tag
//       selectTags.forEach(tag => {
//         filterResult = photographersData.filter(photographer => photographer.tags.includes(tag))
//       })

//       // console.log(filterResult) // output : ok

//       // relaunch the display function but with omly the filtered ones
//       displayPhotographers(filterResult);
//     })
//   });
// }