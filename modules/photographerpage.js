export function photographerPageGenerator(photographe) {
  
    let photographeBannerDOM = "";
    let photographeBannerProfilePictureDOM = "";
    let photographeContactModalDOM = "";
    let photographeStaticBoxPriceDOM = "";

    photographeBannerDOM += `
      
            <div class="banner-infos">
                <h1 class="banner-infos-photographerName">${photographe.name}</h1>
                <h2 class="banner-infos-location">${photographe.city}, ${photographe.country}</h2>
                <p class="banner-infos-tagLine">${photographe.tagline}</p>
                <ul class="banner-infos-tags">
                    ${photographe.tags.map((tag) => {return "<li><a href='#' class='tag' tabindex='-1'>" + "#" + tag + "</a></li>";}).join(' ')}    
                </ul>
            </div>

    `;
    
    document.getElementById("div-banner-photographer-info").innerHTML = photographeBannerDOM;



    photographeBannerProfilePictureDOM += `

        <aside class="banner-profilePicture">
            <img src= pictures/Photographers_ID_Photos/${photographe.portrait} alt= ${photographe.portrait} />
        </aside>

    `;

    document.getElementById("aside-banner-profile-picture").innerHTML = photographeBannerProfilePictureDOM;



    photographeContactModalDOM += `
        
        ${photographe.name}

    `;

    document.getElementById("contact-form-photographerName").innerHTML = photographeContactModalDOM;



    photographeStaticBoxPriceDOM += `

        ${photographe.price}

    `;

    document.getElementById("photographer-page-PriceNbr").innerHTML = photographeStaticBoxPriceDOM;  

    // BROKE EVRYTHING
    // document.getElementById("dropdown-menu-popularity").addEventListener("focus", function () {
    //     openDropDownMenu()
    //   });
      
    //   document.getElementById("dropdown-menu-focus").addEventListener("focusout", function () {
    //     closeDropDownMenu()
    //   });
      
    //   function openDropDownMenu() {
    //     document.querySelector(".dropdown-content").style.display = "block";
    //   }
      
    //   function closeDropDownMenu() {
    //     document.querySelector(".dropdown-content").style.display = "none";
    //   }

} // end of the export function photographerPageGenerator(photographe)