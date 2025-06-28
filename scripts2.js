document.addEventListener("DOMContentLoaded", () => {
    loadCartItems();
    updateCartTotal();
});

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartTable = document.getElementById("cart-table");

    cartItems.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;

        cartTable.appendChild(row);
    });
}

function updateQuantity(index, quantity) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (quantity < 1) {
        quantity = 1;
    }
    cartItems[index].quantity = quantity;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}

function updateCart() {
    const cartTable = document.getElementById("cart-table");
    cartTable.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
    `;
    loadCartItems();
    updateCartTotal();
}

function updateCartTotal() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartTotal = document.getElementById("cart-total");
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert("Proceeding to checkout!");
    // Here, you can add your checkout functionality
}
