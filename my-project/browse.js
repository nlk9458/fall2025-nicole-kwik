console.log(skincare[0].name);

const browseContainer = document.getElementById("browse-products");
const searchInput = document.getElementById("search-input");
const categoryPills = document.querySelectorAll(".category-pill");

let currentCategory = "All";
let currentSearch = "";

function createProductCard(product){
    
    const productDiv = document.createElement("div");
    productDiv.setAttribute("class", "skincare");

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.imagePath);
    productDiv.appendChild(productImage);

    const productBrand = document.createElement("h4");
    productBrand.textContent = product.brand;
    productDiv.appendChild(productBrand);

    const productCompatibility = document.createElement("span");
    productCompatibility.textContent = product.compatibility;
    productCompatibility.classList.add("compatibility-pill")

    if (product.compatibility.toLowerCase() === "safe") {
        productCompatibility.classList.add("safe-pill");
    }
    else {
        productCompatibility.classList.add("not-safe-pill");
    }
    productDiv.appendChild(productCompatibility);


    return productDiv;
    console.log("Added product:", product.name);

}

skincare.forEach((product) => {
    const card = createProductCard(product);
    browseContainer.appendChild(card);

    if (product.id) {
        card.addEventListener("click", () => {
            window.location.href = `my-project/product.html?id=${product.id}`;
        });
    }
});