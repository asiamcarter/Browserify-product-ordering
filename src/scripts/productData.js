const productData = {
    productHTML() {
        let productHTML = `
        <container class="productContainer">
            <div class="productPhotoDiv">
                <img src="productPhoto.jpg" alt="photo of girl wearing Betsy brand necklace">
            </div>
            <div class="productInfo">
                <h3 class="productTitle">Title</h3>
                <p class="productPrice">Price:</p>
                <p class="productDescription">blah blah blah blah blah blah blah</p>
                <p class="productQuantity">Quantity:</p>
            </div>
        </container>
        `
        let productCard = document.createElement("article")
        product.innerHTML = productHTML
        return productCard;
    }
}