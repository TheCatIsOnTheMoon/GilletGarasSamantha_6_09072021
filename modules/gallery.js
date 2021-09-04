export function displayGallery (mediaData) {

    const galleryData = mediaData;




    // /////////////// Gallery Factory /////////////// //

    let photographeGalleryDOM = "";

    galleryData.forEach(media => {

        function createImage() {

            photographeGalleryDOM += `
                <div class="gallery-card">
                    <figure class="gallery-photo">
                        
                            <img src="/pictures/${media.photographerId}/${media.image}" class="lightbox-link" alt="${media.title}" />
                        
                    </figure>
                    <figcaption class="gallery-photo-caption">
                        <h3 class="photo-caption-title">${media.title}</h3>
                        <div class="photo-caption-likes">
                            <p class="photo-caption-likes-number">${media.likes}</p>
                            <span class="photo-caption-likes-heartIcon">
                                <i><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                </svg></i>
                            </span>
                        </div>
                    </figcaption>
                </div>
            `;         
        }
            
        function createVideo() {

            photographeGalleryDOM += `
                <div class="gallery-card">
                    <figure class="gallery-photo">

                            <video controls>
                                <source src="/pictures/${media.photographerId}/${media.video}" type="video/mp4" class="lightbox-link" alt="${media.title}">
                                Your browser does not support the video tag.
                            </video> 
                       
                    </figure>
                    <figcaption class="gallery-photo-caption">
                        <h3 class="photo-caption-title">${media.title}</h3>
                        <div class="photo-caption-likes">
                            <p class="photo-caption-likes-number">${media.likes}</p>
                            
                            <span class="photo-caption-likes-heartIcon">
                                <i><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-heart-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                </svg></i>
                            </span>

                        </div>
                    </figcaption>
                </div>
            `;               
        }

        function galleryFactory() {
            if (media.hasOwnProperty('image')) {

                return createImage();
                
            } else if (media.hasOwnProperty('video')){
    
                return createVideo();
                
            }
        }

        galleryFactory();
        
    });

    document.getElementById("article-gallery-cards").innerHTML = photographeGalleryDOM;








    // //////////// Sorting System ////////////// //

    let sortedData = "";

    document.getElementById("dropdown-menu-popularity").addEventListener("click", function () {
        sortedData = galleryData.sort(sortByPopularity);
        displayGallery (sortedData)        
    });

    document.getElementById("dropdown-menu-date").addEventListener("click", function () {       
        sortedData = galleryData.sort(sortByDate);
        displayGallery (sortedData)        
    });

    document.getElementById("dropdown-menu-title").addEventListener("click", function () {
        sortedData = galleryData.sort(sortByTitle);
        displayGallery (sortedData)       
    });

    // REF : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    function sortByPopularity(a, b) {
        if (a.likes > b.likes) {
            return -1;
        }
        if (b.likes > a.likes) {
            return 1;
        }
        return 0        
    }

    function sortByDate(a, b) {
        if (a.date > b.date) {
            return -1;
        }
        if (b.date > a.date) {
            return 1;
        }
        return 0       
    }

    function sortByTitle(a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (b.title > a.title) {
            return -1;
        }
        return 0       
    }







    // /////////////// Likes system /////////////// //

    let photographeStaticBoxTotalLikesDOM = "";
    let totalNbrOfLikes = 0;


    // Get the total nbr of likes for the photographer
    for (let i = 0; i < galleryData.length; i++) {
        totalNbrOfLikes += galleryData[i].likes;
    }; 

    // console.log(totalNbrOfLikes) // output: OK
    
    // Display total nbr of likes in the static box
    photographeStaticBoxTotalLikesDOM += `
            ${totalNbrOfLikes}
    `;

    document.getElementById("totalNumberOfLikes").innerHTML = photographeStaticBoxTotalLikesDOM;


    // heart likes 

    // let isAlreadyLiked = false;

    function likedHeart() {

        console.log("heart is on")
        
    }

    // let isAlreadyLiked = false;
    
    // document.querySelector("#article-gallery-cards").addEventListener("click", (event) => {

    //     if (event.target.className == "photo-caption-likes-heartIcon-event") {

    //         console.log(isAlreadyLiked)

    //         // if(isAlreadyLiked === false){

    //         //     // event.target.classList.add("liked");
    //         //     // totalNbrOfLikes++;
    //         //     console.log(isAlreadyLiked)
                
    //         //     return isAlreadyLiked = true;      
    //         // }
                                  
    //         // if(isAlreadyLiked === true){
                
    //         //     // event.target.classList.remove("liked");
    //         //     // totalNbrOfLikes--;
    //         //     return isAlreadyLiked = false;           
    //         // }
    //     }
        
    // });
    

}// end of export function displayGallery(mediaData)




    // // like system when hearts are clicked
    // let isAlreadyLiked = false;
    

    // gallery.addEventListener("click", (event) => {
      

    //     // only act if target have the proper class "photo-caption-likes-heartIcon"
    //     if (event.target.className == "photo-caption-likes") {
            
    //         if(isAlreadyLiked === false){

    //             // totalNbrOfLikes++;
    //             return isAlreadyLiked = true;          
    //         }
                      
    //         if(isAlreadyLiked === true){

    //             // totalNbrOfLikes--;
    //             return isAlreadyLiked = false;           
    //         }
    //     }
    // });