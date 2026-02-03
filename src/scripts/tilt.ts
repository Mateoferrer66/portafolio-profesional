/**
 * Simple Vanilla JS Tilt Effect
 * Looks for elements with class 'tilt-card' and applies a 3D tilt transformation on mousemove.
 */

const initTilt = () => {
    const cards = document.querySelectorAll('.tilt-card') as NodeListOf<HTMLElement>;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });

        // Add transition for smooth exit but instant movement
        card.style.transition = 'transform 0.1s ease';
    });
};

// Run on load and View Transitions
document.addEventListener('astro:page-load', initTilt);
document.addEventListener('DOMContentLoaded', initTilt);
