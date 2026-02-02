/**
 * Utility functions and logic for the Home/Index page.
 * This script is loaded via <script src="..."> in index.astro
 */

// Throttle utility for better performance
function throttle(func: Function, limit: number) {
    let inThrottle = false;
    return function (...args: any[]) {
        if (!inThrottle) {
            func.apply(null, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Portrait 3D effect with throttling
const portrait = document.getElementById("hero-portrait");
if (portrait) {
    const handleMouseMove = throttle((e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const yRotation = (clientX / innerWidth - 0.5) * 30;
        const xRotation = -(clientY / innerHeight - 0.5) * 30;
        portrait.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05, 1.05, 1.05)`;
    }, 16); // ~60fps

    document.addEventListener(
        "mousemove",
        handleMouseMove as any,
    );
    document.addEventListener("mouseleave", () => {
        portrait.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    });
});

// Enhanced keyboard navigation for CTA buttons
const ctaButtons = document.querySelectorAll(".cta-button");
ctaButtons.forEach((button) => {
    const btn = button as HTMLElement;
    btn.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.click();
        }
    });
});
