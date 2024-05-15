document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', this.checked ? 'dark-mode' : '');
    });
});
