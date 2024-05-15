// Toggle dark mode
const darkModeToggle = document.getElementById('checkbox');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', darkModeToggle.checked ? 'enabled' : 'disabled');
});

// Initialize AOS animations
AOS.init({
    duration: 1200,
    once: true
});
