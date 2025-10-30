console.log(skincare[0].name);

const skincareProducts = document.getElementById("skincare-products");

skincare.forEach(function(product){
    
    const productDiv = document.createElement("div");
    productDiv.setAttribute("class", "skincare");

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.imagePath);
    productDiv.appendChild(productImage);

    const productBrand = document.createElement("p");
    productBrand.textContent = product.brand;
    productDiv.appendChild(productBrand);

    const productCompatibility = document.createElement("p");
    productCompatibility.textContent = product.compatibility;
    productDiv.appendChild(productCompatilibility);

    skincareProducts.appendChild(productDiv)
    console.log("Added product:", product.name);
});
