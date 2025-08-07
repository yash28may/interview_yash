// script.js

const productData = [
  {
    color: "Red",
    image: "./images/red shirt.webp",
    price: "Rs 999"
  },
  {
    color: "Blue",
    image: "./images/blue-shirt.avif",
    price: "Rs 1049"
  },
  {
    color: "Green",
    image: "./images/green-shirt.webp",
    price: "Rs 1099"
  }
];

const swatches = document.querySelectorAll(".color-swatch");
const image = document.getElementById("product-image");
const price = document.getElementById("product-price");

swatches.forEach((swatch, index) => {
  swatch.addEventListener("click", () => {
    // Remove previous selection
    swatches.forEach(s => {
      s.classList.remove("selected");
      s.setAttribute("aria-checked", "false");
    });

    // Add selected class
    swatch.classList.add("selected");
    swatch.setAttribute("aria-checked", "true");

    // Update image and price
    image.src = productData[index].image;
    price.textContent = productData[index].price;
  });

});

const addToCartBtn = document.getElementById("add-to-cart");

addToCartBtn.addEventListener("click", () => {
  alert("Hello Clothzy");
});