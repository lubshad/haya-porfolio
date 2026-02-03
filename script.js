document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add fade-in-up class dynamically if not already present
                if (!entry.target.classList.contains('fade-in-up')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .glass-card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(5, 5, 5, 0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.textAlign = 'center';
            }
        });
    }

    // Parallax Effect for Background Globes
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        document.querySelectorAll('.globe').forEach((globe, index) => {
            const speed = (index + 1) * 20;
            const x = (window.innerWidth - e.clientX * speed) / 100;
            const y = (window.innerHeight - e.clientY * speed) / 100;
            globe.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Glitch Text Randomize
    const glitch = document.querySelector('.glitch-text');
    if (glitch) {
        setInterval(() => {
            const r1 = Math.random() * 10;
            const r2 = Math.random() * 10;
            glitch.style.setProperty('--r1', r1);
            glitch.style.setProperty('--r2', r2);
        }, 2000);
    }
});
