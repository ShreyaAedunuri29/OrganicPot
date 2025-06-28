// Sign Up functionality
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Save the user credentials to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to the login page
});

// Login functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login is successful');
        window.location.href = 'catalog.html'; // Redirect to the catalog page
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});
