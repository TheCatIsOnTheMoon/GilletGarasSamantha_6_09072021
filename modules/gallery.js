export function displayGallery(galleryData) {

    let photographeGalleryDOM = "";

    galleryData.forEach(media => {

        function createImage() {
            photographeGalleryDOM += `
                <div class="gallery-card">
                    <figure class="gallery-photo">
                        
                            <img src="img/${media.photographerId}/${media.image}" class="lightbox-link" alt="${media.title}" id="${media.id}" tabindex="0"/>
                        
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

                            <video class="lightbox-link" src="img/${media.photographerId}/${media.video}" alt="${media.title}" id="${media.id}" tabindex="0">
                                <source src="img/${media.photographerId}/${media.video}" type="video/mp4" alt="${media.title}">
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
}