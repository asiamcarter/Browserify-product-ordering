import productData from "./productData"

const productList = {
    appendContact() {
        let contactDOM = productData.productHTML();
        let bodyContainer = document.querySelector(".output")
        bodyContainer.appendChild(contactDOM)
    }

}

export default productList