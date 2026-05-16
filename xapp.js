let cart = [];

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });
    
    updateCart();
    alert(productName + ' added to cart!');
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        
        cartItems.innerHTML += `
        <div class="cart-item">
        <div>
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        </div>
        <button onclick="removeItem(${index})">X</button>
        </div>
        `;
    });

    cartCount.innerText = cart.length;
    totalPrice.innerText = total;
}

function checkout() {
    if(cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Order placed successfully!');
        cart = [];
        updateCart();
    }
}