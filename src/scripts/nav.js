
const nav = {

    createNav() {
        // Create container for Navigation Bar
        let navContainer = document.createElement("nav")
        navContainer.classList.add("nav")

        let navUl = document.createElement("ul")
        navUl.classList.add("navUl")

        let navLiCompanyName = document.createElement("li")
        navLiCompanyName.classList.add("navLi", "navTitle")
        navLiCompanyName.textContent = "Betsy"

        let navLiCategories = document.createElement("li")
        navLiCategories.classList.add("navLi", "navLink")
        navLiCategories.innerHTML= `<a href="#">Categories</a>`

        let navLiOrders = document.createElement("li")
        navLiOrders.classList.add("navLi", "navLink")
        navLiOrders.innerHTML = `<a href="#">Orders</a>`

        let navLiLogout = document.createElement("li")
        navLiLogout.classList.add("navLi", "navLink")
        navLiLogout.innerHTML=`<a href="#">Logout</a>`

        navContainer.appendChild(navLiCompanyName)
        navContainer.appendChild(navLiCategories)
        navContainer.appendChild(navLiOrders)
        navContainer.appendChild(navLiLogout)

        let bodyContainer = document.querySelector(".output")
        bodyContainer.appendChild(navContainer);
    }
}


export default nav


