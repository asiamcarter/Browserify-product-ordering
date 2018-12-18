import productData from "./productData"
import product from "./product"

const productList = {
    appendProduct() {
        productData.getProductData()
        .then(allProducts => {
            let productFragment = document.createDocumentFragment()

            allProducts.forEach(productIteration => {
                let product2 = product.productHTML(productIteration);
                productFragment.appendChild(product2)
            })

            let outputArticle = document.querySelector(".output")
            outputArticle.appendChild(productFragment)
        })
    }

}

export default productList