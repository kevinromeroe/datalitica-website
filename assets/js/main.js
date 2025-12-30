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
    if (track && track.parentElement) {
        const containerWidth = track.parentElement.clientWidth;
        const extraWidth = track.scrollWidth - containerWidth;

        // Solo activar el auto-scroll cuando haya overflow horizontal (desktop/tablet)
        if (extraWidth > 40) {
            let scrollAmount = 0;
            const cardWidth = 330; // 300px width + 30px gap

            setInterval(() => {
                scrollAmount += cardWidth;

                // Si llegamos al final (aproximado), volver al inicio
                if (scrollAmount >= extraWidth) {
                    scrollAmount = 0;
                }

                track.style.transform = `translateX(-${scrollAmount}px)`;
            }, 5000); // 5 segundos
        } else {
            track.style.transform = 'none';
        }
    }
});
