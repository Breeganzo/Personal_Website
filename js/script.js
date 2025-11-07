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
    // Add page fade-in animation on load
    document.body.classList.add('page-fade-in');
    
    // Smooth page transitions for navigation links
    const navLinks = document.querySelectorAll('a[href$=".html"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only apply to internal navigation (not external links)
            if (href && !this.hasAttribute('target')) {
                e.preventDefault();
                document.body.classList.add('page-fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 300); // Match CSS transition duration
            }
        });
    });
    
    // Dynamically update certifications count
    updateCertificationsCount();
    
    // Dynamically update experience years
    updateExperienceYears();
    
    // Dynamic typing animation for capabilities/skills
    const titles = [
        "Agentic AI",
        "Terraform",
        "Copilot Studio Agent Builder",
        "GitOps",
        "MLOps",
        "AWS Bedrock",
        "DevOps"
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
    const navMenuLinks = document.querySelectorAll('.nav-item a');
    navMenuLinks.forEach(link => {
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

// Dynamically calculate years of experience (excluding education gaps)
function updateExperienceYears() {
    // Calculate total months of actual work experience (excluding QMUL education period)
    const workPeriods = [
        { start: new Date('2022-02-01'), end: new Date('2022-05-31') },  // Atkins: 4 months
        { start: new Date('2022-10-01'), end: new Date('2023-07-31') },  // Evertz: 10 months
        { start: new Date('2024-01-01'), end: new Date('2024-03-31') },  // Zero2AI: 3 months
        { start: new Date('2025-01-01'), end: new Date() }               // Kyndryl: ongoing
    ];
    
    let totalMonths = 0;
    const currentDate = new Date();
    
    workPeriods.forEach(period => {
        const endDate = period.end > currentDate ? currentDate : period.end;
        const monthsDiff = (endDate.getFullYear() - period.start.getFullYear()) * 12 + 
                          (endDate.getMonth() - period.start.getMonth()) + 1; // +1 to include both start and end months
        totalMonths += monthsDiff;
    });
    
    // Convert total months to years
    const totalYears = totalMonths / 12;
    const displayYears = Math.floor(totalYears);
    
    const experienceElement = document.getElementById('experience-years');
    if (experienceElement) {
        experienceElement.setAttribute('data-target', displayYears);
        experienceElement.textContent = displayYears + '+';
    }
}

