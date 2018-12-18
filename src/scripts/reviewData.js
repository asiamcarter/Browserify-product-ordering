     const reviewData = {
        reviewHTML() {
            let reviewHTML = `
            <container class="reviewContainer">
                <h3>Reviews</h3>
                <div class="profile1">
                    <img src="profileImage1.jpg" alt="user profile photo" class="profile1">
                </div>
                <div class="review1">
                    <p> This product was the booooooooooooooooooooooooooomb.com seriously da best</p>
                </div>
            </container>
            `
            let reviewCard = document.createElement("article")
            reviewCard.innerHTML = reviewHTML
            return reviewCard;
        }
    }

    export default reviewData
