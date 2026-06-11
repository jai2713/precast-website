// ============= PAGE NAVIGATION =============
function navigateTo(section) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(section);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update nav links
    updateNavLinks(section);
    
    // Close mobile menu if open
    closeNavMenu();
}

function updateNavLinks(activeSection) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === activeSection) {
            link.classList.add('active');
        }
    });
}

// ============= NAVIGATION MENU =============
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

function closeNavMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        navigateTo(section);
    });
});

// ============= SMOOTH SCROLL FOR NAVIGATION =============
document.addEventListener('DOMContentLoaded', () => {
    // Set home page as active by default
    navigateTo('home');
});

// ============= CONTACT FORM HANDLING =============
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Validate
        if (!name || !email || !service || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Create mailto link with form data
        const mailtoLink = `mailto:info@southwestprecast.com.au?subject=New Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Company: ${company}\n` +
            `Service Interest: ${service}\n\n` +
            `Project Details:\n${message}`
        )}`;
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 2rem;
            border-radius: 4px;
            z-index: 2000;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        `;
        successMessage.textContent = '✓ Thank you! We\'ll be in touch within 24 hours.';
        document.body.appendChild(successMessage);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 4 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 4000);
        
        // Open email client (optional - user can choose to send)
        // window.location.href = mailtoLink;
    });
}

// ============= ADD ANIMATION FOR ELEMENTS ON SCROLL =============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll(
        '.service-card, .service-card-mini, .benefit-item, .value-item, .gallery-item'
    );
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============= SMOOTH NAVBAR BACKGROUND ON SCROLL =============
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(42, 42, 42, 0.5)';
    } else {
        navbar.style.borderBottomColor = 'rgba(42, 42, 42, 1)';
    }
});

// ============= GALLERY HOVER EFFECTS =============
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// ============= LAZY LOAD IMAGES =============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============= ADD KEYBOARD NAVIGATION =============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNavMenu();
    }
});

// ============= TRACK PAGE CHANGES FOR ANALYTICS (OPTIONAL) =============
const pageChangeTracking = (section) => {
    // This can be connected to your analytics service
    console.log('Navigated to:', section);
};

// Override navigateTo to include tracking
const originalNavigateTo = navigateTo;
navigateTo = function(section) {
    originalNavigateTo(section);
    pageChangeTracking(section);
};

// ============= MOBILE MENU CLOSE ON ORIENTATION CHANGE =============
window.addEventListener('orientationchange', closeNavMenu);

// ============= UTILITY: FADE IN ANIMATION FOR PAGE LOAD =============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ============= CUSTOM CTA BUTTON ANIMATIONS =============
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        if (!this.style.position) {
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
        }
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation if not already in CSS
if (!document.querySelector('style[data-ripple]')) {
    const style = document.createElement('style');
    style.setAttribute('data-ripple', 'true');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============= SCROLL SPY FOR NAV HIGHLIGHTING =============
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.page');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Only update if we're on the current page to avoid conflicts with navigation
});

console.log('Southwest Precast - Website loaded successfully');
