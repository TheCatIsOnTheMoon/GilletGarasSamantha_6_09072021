export function displayGallery(mediaData) {

    const galleryData = mediaData;

    // ------------------------------//////////// Gallery Display ////////////// ----------------------------------------------//

    let photographeGalleryDOM = "";

    galleryData.forEach(media => {

        function createImage() {

            photographeGalleryDOM += `
                <div class="gallery-card">
                    <figure class="gallery-photo">
                        
                            <img src="/pictures/${media.photographerId}/${media.image}" class="lightbox-link" alt="${media.title}" id="${media.id}" tabindex="0"/>
                        
                    </figure>
                    <figcaption class="gallery-photo-caption">
                        <h3 class="photo-caption-title">${media.title}</h3>
                       
                        <div class="photo-caption-likes">
                            <p class="photo-caption-likes-number">${media.likes}</p>                           
                            <span class="photo-caption-likes-heartIcon" tabindex="0"> ♥ </span>
                        </div>

                    </figcaption>
                </div>
            `;
        }

        function createVideo() {

            photographeGalleryDOM += `
                <div class="gallery-card" id="${media.id}">
                    <figure class="gallery-photo">

                            <video class="lightbox-link" src="/pictures/${media.photographerId}/${media.video}" alt="${media.title}" id="${media.id}" tabindex="0">
                                <source src="/pictures/${media.photographerId}/${media.video}" type="video/mp4" alt="${media.title}">
                                Your browser does not support the video tag.
                            </video> 
                       
                    </figure>
                    <figcaption class="gallery-photo-caption">
                        <h3 class="photo-caption-title">${media.title}</h3>

                        <div class="photo-caption-likes">
                            <p class="photo-caption-likes-number">${media.likes}</p>                           
                            <span class="photo-caption-likes-heartIcon" tabindex="0"> ♥ </span>
                        </div>

                    </figcaption>
                </div>
            `;
        }

        function galleryFactory() {
            if (media.hasOwnProperty('image')) {

                return createImage();

            } else if (media.hasOwnProperty('video')) {

                return createVideo();

            }
        }

        galleryFactory();

    });

    document.getElementById("article-gallery-cards").innerHTML = photographeGalleryDOM;



    // ------------------------------//////////// Sorting System ////////////// ----------------------------------------------//
    // REF : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    function sortGallery(galleryData) {
        // initialisation -------------------
        let sortedData = "";

        // events ---------------------------
        document.getElementById("dropdown-menu-popularity").addEventListener("click", function () {
            sortedData = galleryData.sort(sortByPopularity);
            displayGallery(sortedData)
        });

        document.getElementById("dropdown-menu-date").addEventListener("click", function () {
            sortedData = galleryData.sort(sortByDate);
            displayGallery(sortedData)
        });

        document.getElementById("dropdown-menu-title").addEventListener("click", function () {
            sortedData = galleryData.sort(sortByTitle);
            displayGallery(sortedData)
        });

        // functions -----------------------
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
    }

    sortGallery(galleryData);


    // ------------------------------//////////// Sorting System ////////////// ----------------------------------------------//
    function likingSystem(galleryData) {

        // initialisation -------------------
        let totalNbrOfLikes = 0;

        displayTotalNbrOfLikes(galleryData)

        // events ---------------------------
        document.querySelector("#article-gallery-cards").addEventListener("click", (event) => {
            likesRemoveAndAdd(event)
        });

        document.addEventListener('keydown', (event) => {

            if (event.key === 'Enter') {

                if (event.target.className == "photo-caption-likes-heartIcon" || event.target.className == "photo-caption-likes-heartIcon liked") {
                    return likesRemoveAndAdd(event)
                }

            }
        });

        // functions -----------------------

        // Display total nbr of likes in the static box in the bottom right
        function displayTotalNbrOfLikes(galleryData) {

            // Get the total nbr of likes for the photographer
            for (let i = 0; i < galleryData.length; i++) {
                totalNbrOfLikes += Number(galleryData[i].likes);
            };

            return document.getElementById("totalNumberOfLikes").innerHTML = `${totalNbrOfLikes}`;
        }

        // adding and remove likes
        function likesRemoveAndAdd(event) {

            if (event.target.className === "photo-caption-likes-heartIcon liked") {

                event.target.classList.remove("liked");
                event.target.previousElementSibling.innerHTML--;
                totalNbrOfLikes--;

                return document.getElementById("totalNumberOfLikes").innerHTML = `${totalNbrOfLikes}`;
            }

            if (event.target.className === "photo-caption-likes-heartIcon") {

                event.target.classList.add("liked");
                event.target.previousElementSibling.innerHTML++;
                totalNbrOfLikes++;

                return document.getElementById("totalNumberOfLikes").innerHTML = `${totalNbrOfLikes}`;

            }

            return false

        }
    }

    likingSystem(galleryData);

} // end of export function displayGallery(mediaData)