     const review = {
        reviewHTML(value) {
            console.log("reviewHTML",value)
            let reviewHTML = `
            <container class="reviewContainer">
                <img src="${value.profilePhoto}" alt="user profile photo" class="reviewPhoto">
                <h4>${value.username}</h4><p class="date">${value.date}</p>
                <p class="reviewP">${value.content}</p>
            </container>
            `
            let reviewCard = document.createElement("article")
            reviewCard.innerHTML = reviewHTML
            return reviewCard;
        }
    }

    export default review