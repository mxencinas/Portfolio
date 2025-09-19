// Toggle modo claro/oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Toggle para mostrar más/menos información en "Sobre Mí"
const aboutToggle = document.getElementById('about-toggle');
const aboutShort = document.getElementById('about-short');
const aboutFull = document.getElementById('about-full');

aboutToggle.addEventListener('click', () => {
    aboutFull.classList.toggle('hidden');
    aboutShort.classList.toggle('hidden');
    
    if (aboutFull.classList.contains('hidden')) {
        aboutToggle.textContent = 'Leer más';
    } else {
        aboutToggle.textContent = 'Leer menos';
    }
});

document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace # se active
    window.open('assets/MAXIMILIANO ENCINAS.pdf', '_blank'); // Abre el PDF en una nueva pestaña
});

// Animación de la barra de progreso al hacer scroll
const progressBars = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Detectar cuando la sección de formación está en vista
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
}, { threshold: 0.5 });

const educationSection = document.getElementById('education');
if (educationSection) {
    observer.observe(educationSection);
}

// Menú móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});