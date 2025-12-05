const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

const product = skincare.find((p) => p.id === id);

if (!product) {
  document.body.innerHTML = "<h2>Product not found</h2>";
  throw new Error("Product not found");
}

// Basic info
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-brand").textContent = product.brand;
document
  .getElementById("product-image")
  .setAttribute("src", product.imagePath);

// Compatibility pill
const compatEl = document.getElementById("product-compatibility");
compatEl.textContent = product.compatibility;

if (product.compatibility.toLowerCase() === "safe") {
  compatEl.classList.add("safe-pill");
} else {
  compatEl.classList.add("not-safe-pill");
}

// Description
document.getElementById("product-description").textContent =
  product.description;

// Safe ingredients
const safeList = document.getElementById("safe-ingredients");
product.safeIngredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  safeList.appendChild(li);
});

// Irritant ingredients
const irritantList = document.getElementById("irritant-ingredients");
product.irritantIngredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  irritantList.appendChild(li);
});

// Why not safe section
if (product.compatibility.toLowerCase() === "not safe") {
  document.getElementById("why-not-safe").textContent = product.whyNotSafe;
} else {
  document.getElementById("not-safe-section").style.display = "none";
}

// Where to buy (buttons)
const buttonsBox = document.getElementById("buy-buttons");
product.whereToBuy.forEach((store) => {
  const link = document.createElement("a");
  link.href = store.url;
  link.target = "_blank";
  link.classList.add("buy-button");
  link.textContent = store.store; // from skincare.js
  buttonsBox.appendChild(link);
});
