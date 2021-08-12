// // display the photographers list
// export function photographerPageGenerator(data) {

//     const photographers = data.photographers;
//     const media = data.media;
  
//     let photographersBannerDOM = "";
//     let photographersGalleryDOM = "";

//     photographersBannerDOM += `
    
//         <article>
//           <div class="banner-infos">
//             <h1 class="banner-infos-photographerName">${photographer.name}</h1>
//             <h2 class="banner-infos-location">${photographer.city}, ${photographer.country}</h2>
//             <p class="banner-infos-tagLine">${photographer.tagline}</p>
//             <ul class="photographer-card-tags">
//                 ${photographer.tags.map((tag) => {return "<li><a href='#' class='tag'>" + "#" + tag + "</a></li>";})}    
//             </ul>
//           </div>
//           <button class="banner-contactBtn button" id="contact-modal-form-launchBtn">
//             Contactez-moi
//           </button>
//         </article>
//         <aside class="banner-profilePicture">
//           <img src= pictures/Photographers_ID_Photos/${photographer.portrait} alt= ${photographer.portrait} />
//         </aside>

//     `;
    
//     document.getElementById("section-banner-photographer").innerHTML = photographersBannerDOM;
// }

//     photographersBannerDOM += `

//             <div class="gallery-card">
//               <figure class="gallery-photo">
//                 <img src="/pictures/Mimi/Animals_Rainbow.jpg" alt="" />
//               </figure>
//               <figcaption class="gallery-photo-caption">
//                 <h3 class="photo-caption-title">Titre Photo</h3>
//                 <div class="photo-caption-likes">
//                   <p class="photo-caption-likes-number">12</p>
//                   <span class="photo-caption-likes-heartIcon"
//                     ><i>
//                       <svg
//                         aria-hidden="true"
//                         focusable="false"
//                         data-prefix="fas"
//                         data-icon="heart"
//                         class="svg-inline--fa fa-heart fa-w-16"
//                         role="img"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 512 512"
//                       >
//                         <path
//                           fill="currentColor"
//                           d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
//                         ></path>
//                       </svg> </i
//                   ></span>
//                 </div>
//               </figcaption>
//             </div>
//     `;
    
//     document.getElementById("article-gallery-cards").innerHTML = photographersGalleryDOM;
  
// }