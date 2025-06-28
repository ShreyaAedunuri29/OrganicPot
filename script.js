let cart = [];
let user = null;

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCartItems();
}

function removeCartItem(name) {
    cart = cart.filter(item => item.name !== name);
    renderCartItems();
}

function renderCartItems() {
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = '';
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeCartItem('${item.name}')">Remove</button></td>
        `;
        cartTable.appendChild(row);
    });
}

function checkout() {
    alert('Proceeding to checkout');
    window.location.href = 'checkout.html';
}

function validateSignupForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    user = { username, email, password };
    alert('Registration successful!');
    window.location.href = 'login.html';
    return true;
}

function validateLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (user && user.username === username && user.password === password) {
        alert('Login successful!');
        window.location.href = 'profile.html';
    } else {
        alert('Invalid username or password!');
    }
}

function loadProfile() {
    if (user) {
        document.getElementById('profile-username').textContent = user.username;
        document.getElementById('profile-email').textContent = user.email;
    } else {
        alert('Please log in first!');
        window.location.href = 'login.html';
    }
}

function logout() {
    user = null;
    alert('Logged out successfully!');
    window.location.href = 'index.html';
}

document.getElementById('signup-form')?.addEventListener('submit', validateSignupForm);
document.getElementById('login-form')?.addEventListener('submit', validateLoginForm);
document.getElementById('profile-page')?.addEventListener('load', loadProfile);
document.getElementById('add-to-cart-button')?.addEventListener('click', () => {
    const productId = new URLSearchParams(window.location.search).get('id');
    const product = products.find(p => p.id === parseInt(productId));
    addToCart(product.name, product.price);
});
document.getElementById('cart-page')?.addEventListener('load', renderCartItems);
