// Theme Toggle JavaScript File

// DOM Elements
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or default to dark theme
if (savedTheme === 'light') {
    enableLightMode();
} else {
    enableDarkMode();
}

// Theme Toggle Event Listener
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

// Enable Light Mode
function enableLightMode() {
    body.classList.add('light-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    localStorage.setItem('theme', 'light');
    
    // Update theme-specific elements
    updateThemeSpecificElements('light');
}

// Enable Dark Mode
function enableDarkMode() {
    body.classList.remove('light-mode');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    localStorage.setItem('theme', 'dark');
    
    // Update theme-specific elements
    updateThemeSpecificElements('dark');
}

// Update theme-specific elements
function updateThemeSpecificElements(theme) {
    // You can add specific theme-related adjustments here
    // For example, changing images or other content based on theme
    
    const logoElement = document.querySelector('.logo a');
    if (logoElement) {
        if (theme === 'light') {
            logoElement.style.color = '#14b8a6';
        } else {
            logoElement.style.color = '#14b8a6';
        }
    }
    
    const heroShape = document.querySelector('.hero-shape');
    if (heroShape) {
        if (theme === 'light') {
            heroShape.style.opacity = '0.8';
        } else {
            heroShape.style.opacity = '0.7';
        }
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    prefersDarkScheme.addEventListener('change', (e) => {
        if (e.matches) {
            // System switched to dark theme
            enableDarkMode();
        } else {
            // System switched to light theme
            enableLightMode();
        }
    });
}