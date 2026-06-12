// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Animates only once
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Select all hidden elements and observe them
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

// Smooth Scroll for Service Cards to detailed sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // Navbar is fixed, offset by approximately 80px
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}
