      // Your Firebase config object
      const firebaseConfig = {
        apiKey: "AIzaSyDTy9_x0QahA2Nj-I3owXWB1p3x3oQBG-M",
        authDomain: "authen01-906a5.firebaseapp.com",
        projectId: "authen01-906a5",
        storageBucket: "authen01-906a5.appspot.com",
        messagingSenderId: "665516914068",
        appId: "1:665516914068:web:b242622c27ea302f8e8b81"
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

// navbar???


// Function to add item to cart
const addToCart = (productName, price) => {
    
    // Simulate adding to cart logic (you can expand this to store cart items in localStorage or Firebase)
    // For demo purposes, we'll just show a confirmation message
    Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${productName} added to your cart.`,
        showConfirmButton: false,
        timer: 1500
    });
};

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Get all Add to Cart buttons and attach click event listeners
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get product details from the DOM
            const productInfo = button.closest('.product');
            const productName = productInfo.querySelector('.product-info h3').textContent;
            const priceText = productInfo.querySelector('.product-info p').textContent;
            const price = parseFloat(priceText.replace('Price: ₱', '')); // Parse price from text

            // Call addToCart function with product details
            addToCart(productName, price);
        });
    });

    // Other event listeners and Firebase authentication code can be added here as needed
});