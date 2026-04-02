// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del menú móvil
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinksList = document.getElementById('nav-links');

    if (mobileBtn && navLinksList) {
        mobileBtn.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
        });
    }

    // Cerrar menú móvil al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksList.classList.contains('active')) {
                navLinksList.classList.remove('active');
            }
        });
    });

    // 2. Transición suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Compensar por el header fijo
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Efecto Glass en Navbar al hacer scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// 4. Lógica de Tabs
function openTab(event, tabId) {
    // Esconder todos los contenidos de tab
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active-content');
    }

    // Quitar la clase active de todos los botones
    const tabBtns = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active');
    }

    // Mostrar el tab actual y agregar la clase active al botón
    document.getElementById(tabId).classList.add('active-content');
    event.currentTarget.classList.add('active');
}

// 5. Lógica de Notificaciones evento (con EmailJS)
async function activarNotificaciones() {
    const emailInput = document.getElementById('notif-email');
    const messageDisplay = document.getElementById('notif-message');
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        messageDisplay.style.color = '#f44336';
        messageDisplay.innerText = 'Por favor, ingresa tu correo electrónico.';
        return;
    }

    if (!emailRegex.test(email)) {
        messageDisplay.style.color = '#f44336';
        messageDisplay.innerText = 'Por favor, ingresa un correo electrónico válido.';
        return;
    }

    try {
        messageDisplay.style.color = '#cccccc';
        messageDisplay.innerText = 'Procesando...';

        await emailjs.send(
            'service_nfs2u8x', 
            'template_hu1w4zf', 
            { user_email: email }
        );

        messageDisplay.style.color = '#4CAF50';
        messageDisplay.innerText = '¡Te has suscrito a las notificaciones con éxito!';
        emailInput.value = '';

        setTimeout(() => {
            messageDisplay.innerText = '';
        }, 4000);

    } catch (error) {
        console.error('FAILED...', error);
        messageDisplay.style.color = '#f44336';
        messageDisplay.innerText = 'Hubo un problema. Inténtalo de nuevo más tarde.';
    }
}
