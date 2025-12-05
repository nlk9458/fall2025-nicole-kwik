console.log(skincare[0].name);

const trendingContainer = document.getElementById("trending-products");
const recommendedContainer = document.getElementById("recommended-products");

function createProductCard(product) {
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
  productCompatibility.classList.add("compatibility-pill");

  if (product.compatibility.toLowerCase() === "safe") {
    productCompatibility.classList.add("safe-pill");
  } else {
    productCompatibility.classList.add("not-safe-pill");
  }
  productDiv.appendChild(productCompatibility);

  // if you want this log, put it BEFORE return
  console.log("Added product:", product.name);

  return productDiv;
}

// 🔹 Trending Products
skincare
  .filter((product) => product.isTrending)
  .forEach((product) => {
    const card = createProductCard(product);

    // only add click if product has an id (right now: your first 2 items)
    if (product.id) {
      card.addEventListener("click", () => {
        // ⬇️ THIS IS CORRECT
        window.location.href = `my-project/product.html?id=${product.id}`;
      });
    }

    // ⬇️ this MUST be inside the forEach
    trendingContainer.appendChild(card);
    console.log("Trending product:", product.name, "id:", product.id);
  });

// 🔹 Recommended Products
skincare
  .filter((product) => product.isRecommended)
  .forEach((product) => {
    const card = createProductCard(product);

    if (product.id) {
      card.addEventListener("click", () => {
        window.location.href = `my-project/product.html?id=${product.id}`;
      });
    }

    recommendedContainer.appendChild(card);
    console.log("Recommended product:", product.name, "id:", product.id);
  });
