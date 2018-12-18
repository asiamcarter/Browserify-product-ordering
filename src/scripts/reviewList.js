
import reviewData from "./reviewData"
import review from "./review"

const reviewList = {
    appendReview() {
        reviewData.getReviewData()
        .then(allReviews => {
            let reviewFragment = document.createDocumentFragment()
            console.log("allReviews", allReviews)

            allReviews.forEach(reviewIteration => {
                let review2 = review.reviewHTML(reviewIteration);
                reviewFragment.appendChild(review2)
                console.log("reviewI", reviewIteration)
            })

            let outputArticle = document.querySelector(".output")
            outputArticle.appendChild(reviewFragment)
        })
    }

}

export default reviewList