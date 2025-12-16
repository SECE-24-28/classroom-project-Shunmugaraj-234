let cart = [];
let total = 0;
let currentSlide = 0;

// Change quantity
function changeQty(button, change) {
    const input = button.parentElement.querySelector('input');
    let value = parseInt(input.value);
    value = value + change;
    if (value < 1) value = 1;
    input.value = value;
}

// Add to cart with quantity
function addToCart(productName, price, button) {
    const qtyInput = button.parentElement.querySelector('input');
    const qty = parseInt(qtyInput.value) || 1;

    // Check if item already exists
    const existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({ name: productName, price: price, quantity: qty });
    }

    total += price * qty;
    updateCart();
    updateCartCount();
}

// Remove item
function removeFromCart(index) {
    total -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
    updateCart();
    updateCartCount();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<li style="text-align:center; color:#888; padding:30px;">Your cart is empty</li>';
    } else {
        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            const li = document.createElement('li');
            li.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    $${item.price.toFixed(2)} × ${item.quantity} = $${subtotal.toFixed(2)}
                </div>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(li);
        });
    }
    totalElement.textContent = total.toFixed(2);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function showCartPage() {
    document.getElementById('cart-page').classList.remove('hidden');
    updateCart();
}

function hideCartPage() {
    document.getElementById('cart-page').classList.add('hidden');
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Thank you for your purchase!\nTotal: $${total.toFixed(2)}\nItems will be shipped soon.`);
    cart = [];
    total = 0;
    updateCart();
    updateCartCount();
    hideCartPage();
}

// Slider
setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 4000);

// Init
updateCartCount();