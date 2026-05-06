document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
            mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Menu Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonial Slider
    const sliderContainer = document.querySelector('.slider-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let scrollAmount = 0;

    if (nextBtn && prevBtn && sliderContainer) {
        nextBtn.addEventListener('click', () => {
            const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 30;
            sliderContainer.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 30;
            sliderContainer.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });
    }

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.hero-content, .hero-image, .feature-item, .menu-item, .about-content, .about-image');
    
    const reveal = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
});
