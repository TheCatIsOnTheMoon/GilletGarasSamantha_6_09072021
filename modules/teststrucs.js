displayNbrOfLikes()

    document.querySelector("#article-gallery-cards").addEventListener("click", (event) => {
        if (event.target.dataLike === true) {
            event.target.dataLike === false;
            displayNbrOfLikes()
        }
        if (event.target.dataLike === false) {
            event.target.dataLike === true;
            displayNbrOfLikes()
        }
        // return displayNbrOfLikes()
    });

    
    function displayNbrOfLikes() {

        let totalNbrOfLikes = 0;

        // Get the total nbr of likes for the photographer
        for (let i = 0; i < galleryData.length; i++) {
            totalNbrOfLikes += Number(galleryData[i].likes);
        };

        const heartIcons = document.querySelectorAll(".photo-caption-likes-heartIcon");

        heartIcons.forEach(heart => {

            if (heart.dataLike === true) {

                heart.previousElementSibling.innerHTML--;
                totalNbrOfLikes--;
            }

            if (heart.dataLike === false) {

                heart.previousElementSibling.innerHTML++;
                totalNbrOfLikes++;
            }


            
        });

        document.getElementById("totalNumberOfLikes").innerHTML = `${totalNbrOfLikes}`;
    };