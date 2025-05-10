// Animations JavaScript File

// DOM Elements for animations
const animElements = document.querySelectorAll('.animate');
const projectCards = document.querySelectorAll('.project-card');
const skillItems = document.querySelectorAll('.skill-item');
const certificateCards = document.querySelectorAll('.certificate-card');
const contactCards = document.querySelectorAll('.contact-card');

// Animate elements when they come into view
function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    animElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
    });
    
    // Animate skill bars when in view
    skillItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        
        if (itemTop < triggerBottom) {
            const skillLevel = item.querySelector('.skill-level');
            if (skillLevel) {
                setTimeout(() => {
                    skillLevel.style.width = skillLevel.getAttribute('style').split(':')[1].trim();
                }, 300);
            }
        }
    });
}

// Add stagger effect to project cards
function staggerProjectCards() {
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
            card.style.opacity = '1';
        }, 200 * index);
    });
}

// Add stagger effect to certificate cards
function staggerCertificateCards() {
    certificateCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
            card.style.opacity = '1';
        }, 200 * index);
    });
}

// Add stagger effect to contact cards
function staggerContactCards() {
    contactCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-left');
            card.style.opacity = '1';
        }, 200 * index);
    });
}

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animate elements
    animElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });
    
    // Set initial state for project cards
    projectCards.forEach(card => {
        card.style.opacity = '0';
    });
    
    // Set initial state for certificate cards
    certificateCards.forEach(card => {
        card.style.opacity = '0';
    });
    
    // Set initial state for contact cards
    contactCards.forEach(card => {
        card.style.opacity = '0';
    });
    
    // Run animations
    animateOnScroll();
    
    // Add listener for projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerProjectCards();
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});
        
        observer.observe(projectsSection);
    }
    
    // Add listener for certificates section
    const certificatesSection = document.getElementById('certificates');
    if (certificatesSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerCertificateCards();
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});
        
        observer.observe(certificatesSection);
    }
    
    // Add listener for contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerContactCards();
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});
        
        observer.observe(contactSection);
    }
});

// Listen for scroll events to trigger animations
window.addEventListener('scroll', animateOnScroll);

// Parallax effect for hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroShape = document.querySelector('.hero-shape');
        
        if (heroShape) {
            heroShape.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });
}

// Typing effect for bio text
function setupTypingEffect() {
    const bioElement = document.querySelector('.about-text p:first-of-type');
    
    if (bioElement) {
        const bioText = bioElement.textContent;
        bioElement.textContent = '';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let i = 0;
                    const typingInterval = setInterval(() => {
                        if (i < bioText.length) {
                            bioElement.textContent += bioText.charAt(i);
                            i++;
                        } else {
                            clearInterval(typingInterval);
                        }
                    }, 20);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.5});
        
        observer.observe(bioElement);
    }
}