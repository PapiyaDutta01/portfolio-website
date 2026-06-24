// Portfolio Website JavaScript

// Show a welcome message in the browser console
console.log("Welcome to Papiya Dutta's Portfolio Website!");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display current year automatically in footer
const footer = document.querySelector('footer p');

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Papiya Dutta`;
}