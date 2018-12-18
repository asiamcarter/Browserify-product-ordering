import reviewList from "./reviewList"



const product = {
    productHTML(value) {
        let productHTML = `
        <container class="productContainer">
            <div class="productPhotoDiv">
                <img src="${value.photo}" alt="photo of girl wearing Betsy brand necklace" class="productPhoto">
            </div>
            <div class="productInfo">
                <h3 class="productTitle">${value.title}</h3>
                <p class="productPrice">${value.price}</p>
                <p class="productDescription">${value.description}</p>
                <p class="productQuantity">Quantity: ${value.quantity}</p>
            </div>
        </container>
        <container class="startReview">
            <h3>Reviews</h3>
        </container>
        `
        reviewList.appendReview();
        let productCard = document.createElement("article")
        productCard.innerHTML = productHTML
        return productCard;
    }
}

export default product

