export function likeSystem(galleryData) {

    let totalNbrOfLikes = 0;

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

    // Display total nbr of likes in the static box in the bottom right
    function displayTotalNbrOfLikes() {

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
    
    displayTotalNbrOfLikes()
}