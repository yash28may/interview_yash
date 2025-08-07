const colorButtons = document.querySelectorAll('.color-option');
const productImage = document.getElementById('product-img');
const priceDisplay = document.getElementById('price');

const productDetails = {
  red: {
    image: './images/top-red.jpg',
    price: 499
  },
  green: {
    image: './images/top-green.jpg',
    price: 549
  },
  blue: {
    image: './images/top-blue.png',
    price: 599
  }
};

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedColor = button.getAttribute('data-color');
    
    // Update image
    productImage.src = productDetails[selectedColor].image;
    
    // Update price
    priceDisplay.textContent = productDetails[selectedColor].price;
  });
});
