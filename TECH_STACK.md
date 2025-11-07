# Technology Stack

Complete list of all technologies, tools, and services used to build this portfolio website.

---

## 🏗️ Core Technologies

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **HTML5** | Standard | Semantic markup, structure |
| **CSS3** | Standard | Styling, animations, responsive design |
| **JavaScript** | ES6+ | Dynamic functionality, calculations, animations |

### Why Vanilla Stack?
✅ **Lightweight** - No framework overhead, fast loading  
✅ **Simple** - Easy to understand and customize  
✅ **Compatible** - Works everywhere, no build process  
✅ **Maintainable** - Pure code, no dependencies to update  

---

## 🎨 CSS Features Used

### Layout
- **CSS Grid** - Page layouts and content organization
- **Flexbox** - Component alignment and spacing
- **Media Queries** - Responsive breakpoints (768px, 1024px)

### Styling
- **CSS Variables** - Color scheme management
- **Gradients** - Background effects, button styling
- **Box Shadows** - Card depth and elevation
- **Border Radius** - Rounded corners and shapes

### Animations
- **@keyframes** - Custom animations (typing, floating, ripple)
- **Transitions** - Smooth state changes
- **Transform** - Scale, translate, rotate effects
- **Intersection Observer API** - Scroll-triggered animations

### Advanced Features
- **Backdrop Filters** - Glassmorphism effects
- **Custom Properties** - Dynamic theming
- **Pseudo-elements** - ::before, ::after decorations
- **CSS Filters** - Image effects

---

## 💻 JavaScript Features

### Core Features
- **ES6+ Syntax** - Arrow functions, template literals, destructuring
- **DOM Manipulation** - Dynamic content updates
- **Event Listeners** - User interactions
- **Date Handling** - Experience calculation

### Dynamic Calculations
```javascript
// Experience Years Calculator
- Calculates professional experience excluding education gaps
- Auto-updates on page load
- Tracks multiple work periods

// Certification Counter
- Counts completed certifications (✅ markers)
- Updates badge dynamically
- No manual counting needed
```

### Animations
- **Typing Animation** - Rotating job titles on landing page
- **Number Counters** - Animated stat counting
- **Scroll Effects** - Fade-in on scroll
- **Ripple Effects** - Button interactions

### APIs Used
- **Intersection Observer** - Scroll-triggered animations
- **Date API** - Experience calculations
- **LocalStorage** - (Available for future enhancements)

---

## 📧 Third-Party Services

### 1. Formspree
**Purpose**: Contact form email delivery  
**Website**: https://formspree.io  
**Pricing**: Free (50 submissions/month)  

**Features Used:**
- ✅ Form submission handling
- ✅ Email forwarding to anthonybreeganzo02@gmail.com
- ✅ Spam protection
- ✅ Reply-to header support

**Integration:**
```html
<form action="https://formspree.io/f/xwpkdrev" method="POST">
```

### 2. DevIcons CDN
**Purpose**: Technology logos and icons  
**Website**: https://devicon.dev  
**Pricing**: Free  

**Icons Used:**
- DevOps: AWS, Azure, Docker, Kubernetes, Terraform, GitHub Actions, GitLab CI/CD
- Programming: Python, JavaScript, Java, Go
- AI/ML: TensorFlow, PyTorch, scikit-learn
- Data: SQL, Pandas, NumPy, Power BI, Tableau
- Microsoft: Power Platform, Copilot Studio, ServiceNow

**Integration:**
```html
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg">
```

### 3. Google Fonts
**Purpose**: Typography  
**Website**: https://fonts.google.com  
**Pricing**: Free  

**Fonts Used:**
- **Inter** - Primary font (300, 400, 500, 600, 700 weights)

**Integration:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### 4. Company Logos (CDN)
**Sources:**
- **Wikipedia Commons** - Kyndryl, QMUL logos
- **LinkedIn Media** - Zero2AI, Evertz, Atkins logos
- **Official Websites** - Various company assets

---

## 🎨 Design Assets

### Icons & Graphics
- **SVG Icons** - Custom inline SVGs for UI elements
- **Emoji** - Unicode emojis for visual enhancement
- **Company Logos** - External CDN-hosted images

### Images
- **Profile Photo** - `assets/profile-pic.png` (500x500px recommended)
- **Resume PDF** - `assets/resume.pdf`

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Blue | `#0066CC` | Brand color, links, buttons |
| Secondary Blue | `#4A90E2` | Accents, hover states |
| Dark Text | `#1a1a2e` | Headings, primary text |
| Gray Text | `#666666` | Secondary text, descriptions |
| Success Green | `#10b981` | Status badge, success states |
| White | `#FFFFFF` | Backgrounds, contrast |
| Light Gray | `#F5F5F5` | Card backgrounds |

---

## 🚀 Deployment & Hosting

### GitHub Pages
**Website**: https://pages.github.com  
**Pricing**: Free  

**Features:**
- ✅ Automatic HTTPS
- ✅ Auto-deploy on push
- ✅ Custom domain support
- ✅ CDN distribution

**Configuration:**
- Repository: `Breeganzo/Personal_Website`
- Branch: `main`
- Directory: Root (`/`)
- URL: `https://breeganzo.github.io/Personal_Website`

---

## 🛠️ Development Tools

### Code Editor
- **VS Code** - Primary development environment
- **Extensions Used:**
  - Live Server (for local testing)
  - Prettier (code formatting)
  - HTML/CSS/JS IntelliSense

### Version Control
- **Git** - Version control system
- **GitHub** - Repository hosting and deployment

### Testing
- **Chrome DevTools** - Debugging and responsive testing
- **Firefox Developer Tools** - Cross-browser testing
- **Mobile Simulators** - Responsive design testing

---

## 📦 File Structure & Organization

### CSS Architecture
```
css/
├── style.css           # Main landing page styles (1013 lines)
│   ├── Variables
│   ├── Reset & Base
│   ├── Navigation
│   ├── Hero Section
│   ├── Stats & Tooltips
│   ├── Animations
│   └── Responsive
│
└── style-pages.css     # Shared page styles (700 lines)
    ├── Page Layouts
    ├── Timeline
    ├── Cards
    ├── Forms
    └── Utilities
```

### JavaScript Architecture
```
js/
├── script.js           # Main page functionality (291 lines)
│   ├── Typing Animation
│   ├── Experience Calculator
│   ├── Certification Counter
│   ├── Stats Animation
│   └── Smooth Scrolling
│
└── script-pages.js     # Shared functionality (150 lines)
    ├── Page Transitions
    ├── Scroll Animations
    ├── Button Effects
    └── Scroll-to-Top
```

---

## 📊 Performance Optimizations

### Loading Speed
✅ **No heavy frameworks** - Pure HTML/CSS/JS  
✅ **Minimal HTTP requests** - Inline SVGs, CDN resources  
✅ **CSS/JS minimization** - Clean, efficient code  
✅ **Image optimization** - Compressed assets  

### User Experience
✅ **Lazy loading** - Intersection Observer for animations  
✅ **Smooth scrolling** - Native CSS scroll-behavior  
✅ **Responsive images** - Proper sizing and formats  
✅ **Fast interactions** - Hardware-accelerated animations  

### SEO & Accessibility
✅ **Semantic HTML** - Proper heading hierarchy  
✅ **ARIA labels** - Screen reader support  
✅ **Meta tags** - Title, description, viewport  
✅ **Alt attributes** - Image descriptions  

---

## 🔧 Browser Compatibility

### Fully Supported
- ✅ **Chrome 90+** - All features work perfectly
- ✅ **Firefox 88+** - All features work perfectly
- ✅ **Safari 14+** - All features work perfectly
- ✅ **Edge 90+** - All features work perfectly

### Partial Support
- ⚠️ **IE11** - Basic functionality works, some animations disabled

### Features with Fallbacks
- CSS Grid → Flexbox fallback
- CSS Variables → Hard-coded values
- Intersection Observer → Scroll event fallback

---

## 📈 Future Enhancements

### Potential Additions
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering/search
- [ ] Analytics integration (Google Analytics)
- [ ] Performance monitoring
- [ ] Progressive Web App (PWA)
- [ ] Internationalization (i18n)

### Technology Upgrades
- [ ] TypeScript for type safety
- [ ] SASS/SCSS for better CSS organization
- [ ] Build tools (Webpack/Vite) for optimization
- [ ] React/Vue for complex interactions

**Note**: Current vanilla stack is intentionally kept simple for ease of customization and deployment.

---

## 📚 Learning Resources

### Documentation
- **MDN Web Docs**: https://developer.mozilla.org
- **CSS-Tricks**: https://css-tricks.com
- **JavaScript.info**: https://javascript.info

### Inspiration
- **Dribbble**: Portfolio design inspiration
- **Awwwards**: Web design showcase
- **CodePen**: Interactive examples

---

## 🔒 Security

### Implemented Measures
✅ **HTTPS** - GitHub Pages enforces SSL  
✅ **Form Protection** - Formspree spam filtering  
✅ **No Sensitive Data** - No API keys in frontend code  
✅ **CSP Headers** - Content Security Policy via GitHub Pages  

### Privacy
- ❌ No tracking cookies
- ❌ No analytics (optional)
- ❌ No data collection
- ✅ Formspree GDPR compliant

---

## 📄 License & Credits

### Open Source
This portfolio is open-source and free to use.

### Credits
- **Icons**: DevIcons (MIT License)
- **Fonts**: Google Fonts (Open Font License)
- **Form Service**: Formspree
- **Hosting**: GitHub Pages

### Author
**Anthony Breeganzo Thomas**  
Platform Engineer | AI/ML Enthusiast | Cloud Architect

---

**💡 Total Lines of Code:**
- HTML: ~2,500 lines
- CSS: ~1,700 lines
- JavaScript: ~450 lines
- **Total: ~4,650 lines of hand-written code**

---

*Last Updated: November 2025*
