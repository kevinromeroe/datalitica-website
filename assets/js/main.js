document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Logic with ARIA support
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
            menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        });

        // Close menu when clicking a nav link (mobile UX)
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            });
        });
    }

    // Basic form validation with user feedback
    var form = document.querySelector('.contact-form');
    if (form) {
        var emailInput = form.querySelector('input[type="email"]');
        var telInput = form.querySelector('input[type="tel"]');

        if (emailInput) {
            emailInput.addEventListener('invalid', function () {
                emailInput.setCustomValidity('Por favor, ingresa un correo electrónico válido.');
            });
            emailInput.addEventListener('input', function () {
                emailInput.setCustomValidity('');
            });
        }

        if (telInput) {
            telInput.addEventListener('invalid', function () {
                telInput.setCustomValidity('Por favor, ingresa un número de teléfono válido.');
            });
            telInput.addEventListener('input', function () {
                telInput.setCustomValidity('');
            });
        }
    }
});
