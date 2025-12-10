
const params = new URLSearchParams(window.location.search);
const rawId = params.get("id");
const id = parseInt(rawId, 10);

const product = skincare.find((p) => p.id === id);

console.log("location.search =", window.location.search);
console.log("raw id from URL =", rawId);
console.log("parsed id =", id);
console.log("skincare ids =", skincare.map((p) => p.id));


if (!product) {
  document.body.innerHTML = "<h2>Product not found</h2>";
  console.error("Product not found for id:", id);
  throw new Error("Product not found");
}

// 3. Basic info
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-brand").textContent = product.brand;
document
  .getElementById("product-image")
  .setAttribute("src", product.imagePath);

// 4. Compatibility pill
const compatEl = document.getElementById("product-compatibility");
compatEl.textContent = product.compatibility;
compatEl.classList.add("compatibility-pill");

if (product.compatibility.toLowerCase() === "safe") {
  compatEl.classList.add("safe-pill");
} else {
  compatEl.classList.add("not-safe-pill");
}

// 5. Description
document.getElementById("product-description").textContent =
  product.description || "";

// 6. SAFE INGREDIENT PILLS
const safeList = document.getElementById("safe-ingredients");
if (product.safeIngredients) {
  product.safeIngredients.forEach((ingredient) => {
    const pill = document.createElement("span");
    pill.classList.add("compatibility-pill", "safe-pill");
    pill.textContent = ingredient;
    safeList.appendChild(pill);
  });
}

// 7. IRRITANT INGREDIENT PILLS
const irritantList = document.getElementById("irritant-ingredients");
if (product.irritantIngredients) {
  product.irritantIngredients.forEach((ingredient) => {
    const pill = document.createElement("span");
    pill.classList.add("compatibility-pill", "not-safe-pill");
    pill.textContent = ingredient;
    irritantList.appendChild(pill);
  });
}

// 8. WHY NOT SAFE
if (product.compatibility.toLowerCase() === "not safe") {
  document.getElementById("why-not-safe").textContent = product.whyNotSafe;
} else {
  const section = document.getElementById("not-safe-section");
  if (section) section.style.display = "none";
}

// 9. WHERE TO BUY BUTTONS
const buttonsBox = document.getElementById("buy-buttons");

if (product.whereToBuy && Array.isArray(product.whereToBuy)) {
  product.whereToBuy.forEach((store) => {
    const link = document.createElement("a");
    link.href = store.url;
    link.target = "_blank";
    link.textContent = store.store;
    link.classList.add("buy-button");

    buttonsBox.appendChild(link);
  });
}



