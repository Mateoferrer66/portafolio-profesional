import fs from 'fs';
let content = fs.readFileSync('src/pages/services.astro', 'utf8');

const oldCSS = `.product-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.2);
        border-color: var(--primary);
    }`;
const newCSS = `.product-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 0 25px rgba(139, 92, 246, 0.6), 0 0 50px rgba(139, 92, 246, 0.3);
        border-color: var(--primary);
        z-index: 10;
        animation: pulseGlow 2s infinite;
    }`;

content = content.replace(oldCSS, newCSS);
fs.writeFileSync('src/pages/services.astro', content, 'utf8');
console.log("Animation patched.");
