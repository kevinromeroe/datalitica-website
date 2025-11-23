document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Logic
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Team Carousel Auto-Scroll
    const track = document.querySelector('.carousel-track');
    if (track) {
        let scrollAmount = 0;
        const cardWidth = 330; // 300px width + 30px gap

        setInterval(() => {
            scrollAmount += cardWidth;

            // Si llegamos al final (aproximado), volver al inicio
            if (scrollAmount >= track.scrollWidth - track.parentElement.clientWidth) {
                scrollAmount = 0;
            }

            track.style.transform = `translateX(-${scrollAmount}px)`;
        }, 5000); // 5 segundos
    }
});
