// Responsive Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark Mode Toggle
const checkbox = document.getElementById('checkbox');
const theme = document.querySelector('.theme');

checkbox.addEventListener('change', () => {
    theme.classList.toggle('dark-mode');
});

// Initialize AOS
AOS.init();
