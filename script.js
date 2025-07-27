// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-item, .certification-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add hover effects for timeline items
document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click to copy functionality for contact information
document.querySelectorAll('.contact-item p').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Show a temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Copied!';
            tooltip.style.cssText = `
                position: absolute;
                background: #667eea;
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - 30) + 'px';
            
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        });
    });
    
    item.style.cursor = 'pointer';
    item.title = 'Click to copy';
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}); 

// --- Animated Fintech Background ---
const bg = document.getElementById('bg-animated');
if (bg) {
    // Remove old canvas if any
    while (bg.firstChild) bg.removeChild(bg.firstChild);
    // Create canvas for animation
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 0;
    bg.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Responsive resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Fintech symbols: INR, card, payment, rupee, etc.
    const fintechSymbols = [
        { type: 'text', value: '₹', color: '#00d4ff', font: 'bold 36px JetBrains Mono' },
        { type: 'text', value: '₹', color: '#fff', font: 'bold 28px JetBrains Mono' },
        { type: 'text', value: '₹', color: '#667eea', font: 'bold 32px JetBrains Mono' },
        { type: 'icon', value: '\uf09d', color: '#00d4ff', font: '900 30px "Font Awesome 6 Free"' }, // credit-card
        { type: 'icon', value: '\uf53a', color: '#fff', font: '900 28px "Font Awesome 6 Free"' }, // money-check-alt
        { type: 'icon', value: '\uf4c0', color: '#00d4ff', font: '900 28px "Font Awesome 6 Free"' }, // rupee-sign
        { type: 'icon', value: '\uf555', color: '#fff', font: '900 28px "Font Awesome 6 Free"' }, // hand-holding-usd
        { type: 'icon', value: '\uf3d1', color: '#667eea', font: '900 28px "Font Awesome 6 Free"' }, // wallet
        { type: 'icon', value: '\uf09d', color: '#fff', font: '900 24px "Font Awesome 6 Free"' }, // credit-card
    ];
    const floating = Array.from({length: 18}, () => {
        const s = fintechSymbols[Math.floor(Math.random() * fintechSymbols.length)];
        return {
            ...s,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speed: 0.3 + Math.random() * 0.5,
            alpha: 0.18 + Math.random() * 0.22,
            dx: -0.2 + Math.random() * 0.4,
            dy: -0.2 + Math.random() * 0.4,
            size: 1 + Math.random() * 0.7
        };
    });

    function drawIcon(ctx, icon, x, y, color, font, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(icon, x, y);
        ctx.restore();
    }

    function animateBG() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        floating.forEach(f => {
            if (f.type === 'text') {
                ctx.save();
                ctx.globalAlpha = f.alpha;
                ctx.font = f.font;
                ctx.fillStyle = f.color;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(f.value, f.x, f.y);
                ctx.restore();
            } else if (f.type === 'icon') {
                drawIcon(ctx, String.fromCharCode(parseInt(f.value.replace('\\uf', ''), 16)), f.x, f.y, f.color, f.font, f.alpha);
            }
            f.y -= f.speed * f.size;
            f.x += f.dx * f.size;
            if (f.y < -40) {
                f.y = canvas.height + 40;
                f.x = Math.random() * canvas.width;
            }
            if (f.x < -40) f.x = canvas.width + 40;
            if (f.x > canvas.width + 40) f.x = -40;
        });
        requestAnimationFrame(animateBG);
    }
    animateBG();
}

// --- Animate SVG Stat Charts ---
function animateStatCharts() {
    document.querySelectorAll('.stat').forEach((stat, i) => {
        const fg = stat.querySelector('.stat-fg');
        if (!fg) return;
        let percent = 1;
        if (stat.innerText.includes('10+')) percent = 1;
        if (stat.innerText.includes('72%')) percent = 0.72;
        // Animate stroke-dashoffset
        setTimeout(() => {
            fg.style.strokeDashoffset = (1 - percent) * 213.6;
        }, 400 + i * 200);
        // Set gradient
        let svg = stat.querySelector('svg');
        if (svg && !svg.querySelector('defs')) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            grad.setAttribute('id', 'stat-gradient');
            grad.setAttribute('x1', '0%');
            grad.setAttribute('y1', '0%');
            grad.setAttribute('x2', '100%');
            grad.setAttribute('y2', '0%');
            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', '#667eea');
            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', '#00eaff');
            grad.appendChild(stop1); grad.appendChild(stop2);
            defs.appendChild(grad);
            svg.insertBefore(defs, svg.firstChild);
        }
    });
}
window.addEventListener('DOMContentLoaded', animateStatCharts);
window.addEventListener('load', animateStatCharts); 