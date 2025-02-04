// Animasi saat scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Form submission
    document.getElementById('formKontak').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Pesan Anda telah terkirim!');
        this.reset();
    });
});