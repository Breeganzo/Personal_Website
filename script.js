function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typing Effect for Title
const titles = ["AI Engineer", "Data Scientist", "ML Developer", "Cloud Engineer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseTime = 2000;

function typeTitle() {
  const titleElement = document.querySelector(".profile-title");
  if (!titleElement) return;

  const currentTitle = titles[titleIndex];
  const baseText = ""; // No prefix, just the title

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

// Scroll Animations - Enhanced for dynamic section reveal
function revealOnScroll() {
  const sections = document.querySelectorAll('section');
  const projectCards = document.querySelectorAll('.project-card');
  const skillItems = document.querySelectorAll('.skill-item');
  
  // Animate sections
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = 200;
    
    if (sectionTop < window.innerHeight - sectionVisible) {
      section.classList.add('section-visible');
    }
  });
  
  // Animate project cards
  projectCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardVisible = 150;
    
    if (cardTop < window.innerHeight - cardVisible) {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
  
  // Animate skill items
  skillItems.forEach((skill, index) => {
    const skillTop = skill.getBoundingClientRect().top;
    const skillVisible = 150;
    
    if (skillTop < window.innerHeight - skillVisible) {
      setTimeout(() => {
        skill.style.opacity = '1';
        skill.style.transform = 'translateY(0)';
      }, index * 30);
    }
  });
}

// Sticky Navigation
function stickyNav() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// Skill bars animation
function animateSkills() {
  const skills = document.querySelectorAll('.skill-item');
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.05}s`;
  });
}

// Project cards animation
function animateProjects() {
  const projects = document.querySelectorAll('.project-card, .color-container');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.1}s`;
  });
}

// Add scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.prepend(progressBar);
}

function updateScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;
  
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.width = scrolled + '%';
}

// Smooth reveal for sections
function initSectionAnimations() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    // Don't hide sections, just prepare them for animation
    section.style.transition = 'all 0.8s ease';
  });
}

// Animate stats counter
let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;
  
  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (sectionTop < windowHeight * 0.8) {
    statsAnimated = true;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      let current = 0;
      const increment = target / 50; // Adjust speed
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          stat.textContent = Math.ceil(current);
          setTimeout(updateCounter, 30);
        } else {
          stat.textContent = target;
        }
      };
      
      updateCounter();
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => loadingScreen.remove(), 500);
    }
  }, 1000);
  
  // Start typing effect if element exists
  const titleElement = document.querySelector(".profile-title");
  if (titleElement) {
    setTimeout(typeTitle, 1000);
  }
  
  // Create scroll progress bar
  createScrollProgress();
  
  // Create scroll to top button
  createScrollToTopButton();
  
  // Initialize section animations
  initSectionAnimations();
  
  // Link skills to projects
  linkSkillsToProjects();
  
  // Set initial URL hash if on a section
  updateURLOnScroll();
  
  // Setup contact form
  setupContactForm();
  
  // Enhance navigation links for smooth scroll
  enhanceNavigationLinks();
  
  // Initial reveal of visible sections
  revealOnScroll();
});

// Enhance navigation for better section scrolling
function enhanceNavigationLinks() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Disable auto-update during programmatic scroll
        isUserScrolling = false;
        
        // Scroll to section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Add visible class immediately
        setTimeout(() => {
          targetSection.classList.add('section-visible');
          // Re-enable auto-update after scroll completes
          setTimeout(() => {
            isUserScrolling = true;
          }, 1000);
        }, 100);
      }
    });
  });
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Create mailto link with form data
    const mailtoLink = `mailto:anthonybreeganzo02@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const submitBtn = form.querySelector('.form-submit-btn');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">Message Sent! ✓</span>';
    submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    
    // Reset form
    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = originalHTML;
      submitBtn.style.background = '';
    }, 3000);
  });
}

// Link skills to related projects
function linkSkillsToProjects() {
  const skillProjectMap = {
    'Python': '#projects',
    'PyTorch': 'https://github.com/Breeganzo/MScProject',
    'TensorFlow': 'https://github.com/Breeganzo/MScProject',
    'PowerBI': '#projects',
    'Tableau': '#projects',
    'Scikit-Learn': 'https://github.com/Breeganzo/MScProject',
    'Pandas & NumPy': '#projects',
    'Deep Learning': 'https://github.com/Breeganzo/MScProject',
    'Azure': 'https://github.com/Breeganzo/Azure_Copilot_Agent',
    'AWS': 'https://github.com/Breeganzo/AWS_Landing_Zone',
    'Docker': '#projects',
    'Git & GitHub': 'https://github.com/Breeganzo',
    'PostgreSQL': '#projects',
    'React': 'https://github.com/Breeganzo/Personal_Website',
    'Node.js': '#projects',
    'MLOps': '#projects'
  };
  
  // Try both old article structure and new skill-item structure
  const skillElements = document.querySelectorAll('.skill-item, article');
  
  skillElements.forEach(element => {
    const skillName = element.querySelector('.skill-name')?.textContent || 
                      element.querySelector('h3')?.textContent ||
                      element.textContent.trim();
    const link = skillProjectMap[skillName];
    
    if (link) {
      element.style.cursor = 'pointer';
      element.addEventListener('click', function() {
        if (link.startsWith('http')) {
          window.open(link, '_blank');
        } else {
          location.href = link;
        }
      });
    }
  });
}

// Update URL hash when scrolling to sections
let scrollTimeout;
let isUserScrolling = true; // Track if scroll is user-initiated

function updateURLOnScroll() {
  // Only update URL if user is actively scrolling (not programmatic scroll)
  if (!isUserScrolling) return;
  
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY + 200; // Offset for sticky nav
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    if (currentSection && window.location.hash !== '#' + currentSection) {
      history.replaceState(null, null, '#' + currentSection);
      
      // Update active nav link
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active');
        }
      });
    }
  }, 150); // Increased debounce time for better performance
}

// Scroll to top button functionality
function createScrollToTopButton() {
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scroll-to-top';
  scrollBtn.innerHTML = '↑';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  `;
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  document.body.appendChild(scrollBtn);
}

function toggleScrollToTopButton() {
  const scrollBtn = document.getElementById('scroll-to-top');
  if (!scrollBtn) return;
  
  if (window.scrollY > 300) {
    scrollBtn.style.opacity = '1';
    scrollBtn.style.visibility = 'visible';
  } else {
    scrollBtn.style.opacity = '0';
    scrollBtn.style.visibility = 'hidden';
  }
}

// Event listeners
window.addEventListener('scroll', function() {
  revealOnScroll();
  stickyNav();
  updateScrollProgress();
  updateURLOnScroll();
  toggleScrollToTopButton();
  animateStats();
});

// Add particle effect on hover for profile picture
const profilePic = document.querySelector('.section__pic-container');
if (profilePic) {
  profilePic.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--mouse-x', x + 'px');
    this.style.setProperty('--mouse-y', y + 'px');
  });
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
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
  
  .btn {
    overflow: hidden;
    position: relative;
  }
`;
document.head.appendChild(style);
