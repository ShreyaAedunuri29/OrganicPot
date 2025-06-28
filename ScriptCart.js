// Sample data for cart items
const cartItems = [
    {
        name: "Organic Pot 1",
        image: "pot3.jpg",
        price: 15.00,
        quantity: 1
    },
    {
        name: "Organic Pot 2",
        image: "pot4.jpg",
        price: 25.00,
        quantity: 2
    }
    {
        name: "Organic Pot 2",
        image: "pot5.jpg",
        price: 25.00,
        quantity: 2
    }

];

document.addEventListener("DOMContentLoaded", () => {
    loadCartItems();
    updateCartTotal();
});

function loadCartItems() {
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
    if (quantity < 1) {
        quantity = 1;
    }
    cartItems[index].quantity = quantity;
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

function removeItem(index) {
    cartItems.splice(index, 1);
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

// Example functions to add items to the cart
function addToCart(name, price, image) {
    const itemIndex = cartItems.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        cartItems[itemIndex].quantity++;
    } else {
        cartItems.push({ name, price, image, quantity: 1 });
    }
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
