// ============ CUENTA ATRAS ============
// Eclipse total de sol: 12 de agosto de 2026, 20:29 hora peninsular (CEST = UTC+2)
const ECLIPSE_DATE = new Date('2026-08-12T20:29:00+02:00').getTime();

function updateCountdown() {
    const now = Date.now();
    const diff = ECLIPSE_DATE - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ============ ESTRELLAS ANIMADAS ============
function createStars() {
    const container = document.getElementById('stars');
    const count = window.innerWidth < 600 ? 80 : 160;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}
createStars();

// ============ MENU MOVIL ============
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ============ FORMULARIO ============
const form = document.getElementById('bookingForm');
const success = document.getElementById('formSuccess');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        success.classList.add('show');
        form.reset();
        setTimeout(() => success.classList.remove('show'), 6000);
    });
}

// ============ ANIMACIONES AL HACER SCROLL ============
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reason-card, .exp-card, .spot, .info-block, .stat, .timeline-item, .activity').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .8s ease, transform .8s ease';
    observer.observe(el);
});

// ============ NAV BACKGROUND AL HACER SCROLL ============
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(5,6,15,0.95)';
    } else {
        nav.style.background = 'rgba(5,6,15,0.75)';
    }
});
