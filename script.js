// Modern Portfolio JavaScript - Navigation and Animations
// 
// DYNAMIC FEATURES:
// 1. Certifications Count - Automatically counts completed certifications (marked with ✅)
// 2. Years of Experience - Calculates from Feb 2022 (first job at Atkins) to current date
// 3. Kyndryl Duration - Updates monthly (see experience.html inline script)
// 4. All stats animate on scroll into view
//
// TO ADD NEW CERTIFICATIONS:
// Simply add a new line in index.html certifications tooltip with ✅ emoji
// The count will automatically update

document.addEventListener('DOMContentLoaded', function() {
    // Add page transition animation
    document.body.classList.add('page-transition');
    
    // Dynamically update certifications count
    updateCertificationsCount();
    
    // Dynamically update experience years
    updateExperienceYears();
    
    // Dynamic typing animation for capabilities/skills
    const titles = [
        "AI Engineer",
        "Cloud Engineer",
        "DevOps Specialist",
        "ML Engineer",
        "Software Engineer",
        "Data Scientist"
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    function typeTitle() {
        const titleElement = document.getElementById('dynamic-title');
        if (!titleElement) return;
        
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            titleElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            titleElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentTitle.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            speed = 500;
        }
        
        setTimeout(typeTitle, speed);
    }
    
    // Start typing animation
    typeTitle();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateStats();
            }
        });
    }, observerOptions);
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
    
    // Animate link cards on scroll
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add parallax effect to background shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.2);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Store the clicked page for highlighting on page load
            const page = this.getAttribute('href').replace('.html', '');
            localStorage.setItem('activePage', page);
        });
    });
});

// Animate statistics counter
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const text = stat.textContent;
        const match = text.match(/(\d+)/);
        if (match) {
            const target = parseInt(match[1]);
            const suffix = text.replace(/\d+/, '');
            let current = 0;
            const duration = 2000;
            const step = target / (duration / 16);
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, 16);
        }
    });
}

// Add smooth page transitions when navigating
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
});

// Enhanced hover effects for navigation
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    const preview = item.querySelector('.nav-preview');
    
    item.addEventListener('mouseenter', () => {
        // Add subtle scale animation
        item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal for quick links section
const quickLinksSection = document.querySelector('.quick-links');
if (quickLinksSection) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    sectionObserver.observe(quickLinksSection);
}

// Dynamically update certifications count
function updateCertificationsCount() {
    const completedCerts = document.querySelectorAll('.cert-item:not(.preparing)');
    const certCountElement = document.getElementById('certifications-count');
    
    if (completedCerts && certCountElement) {
        // Count only completed certifications (those with ✅)
        const count = Array.from(completedCerts).filter(cert => 
            cert.textContent.includes('✅')
        ).length;
        
        certCountElement.setAttribute('data-target', count);
        certCountElement.textContent = count + '+';
    }
}

// Dynamically calculate years of experience
function updateExperienceYears() {
    // First professional role started in February 2022 (Atkins)
    const startDate = new Date('2022-02-01');
    const currentDate = new Date();
    
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    
    // Calculate total years (including decimal)
    const totalYears = yearsDiff + (monthsDiff / 12);
    
    // Round to nearest whole number for display
    const displayYears = Math.floor(totalYears);
    
    const experienceElement = document.getElementById('experience-years');
    if (experienceElement) {
        experienceElement.setAttribute('data-target', displayYears);
        experienceElement.textContent = displayYears + '+';
    }
}

