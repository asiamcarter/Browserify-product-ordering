import reviewList from "./reviewList"
import productList from "./productList"

const product = {
    productHTML(value) {
        let productHTML = `
        <container class="productContainer">
            <div class="productPhotoDiv">
                <img src="${value.photo}" alt="photo of girl wearing Betsy brand necklace">
            </div>
            <div class="productInfo">
                <h3 class="productTitle">${value.title}</h3>
                <p class="productPrice">Price:${value.price}</p>
                <p class="productDescription">${value.description}</p>
                <p class="productQuantity">Quantity:${value.quantity}</p>
            </div>
        </container>
        `
        let productCard = document.createElement("article")
        productCard.innerHTML = productHTML
        return productCard;
    }
}

export default product

