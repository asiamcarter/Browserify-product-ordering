import reviewData from "./reviewData"

const reviewList = {

        appendReview() {
            let reviewDOM = reviewData.reviewHTML();
            let bodyContainer = document.querySelector(".output")
            bodyContainer.appendChild(reviewDOM)
        }

    }

    export default reviewList
