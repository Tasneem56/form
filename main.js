function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (username === "" || password === "") {
        showToast("Please fill in all fields.");
        return;
    }

    showToast(`Welcome, ${username}! You have successfully logged in.`);
}

function register() {
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();

    if (username === "" || email === "" || password === "") {
        showToast("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showToast("Please enter a valid email address.");
        return;
    }

    showToast(`User registered: ${username} with email: ${email}`);
}

function showRegister(event) {
    if (event) event.preventDefault();
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
}

function showLogin(event) {
    if (event) event.preventDefault();
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

// Language switching functions (if needed)
function setLanguage(lang) {
    console.log(`Language set to: ${lang}`);
    // Add your language switching logic here
}

// Optional: Initialize form state on load
document.addEventListener('DOMContentLoaded', () => {
    showLogin();
});
