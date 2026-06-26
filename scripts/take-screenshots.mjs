import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
    { name: "Coffee Lemon", url: "https://coffee-lemon-seven.vercel.app/", file: "coffee-lemon.jpg" },
    { name: "Esmeralds", url: "https://esmeralds.vercel.app/", file: "esmeralds.jpg" },
    { name: "Impcel", url: "https://impcel.vercel.app/", file: "impcel.jpg" },
    { name: "Juice Khaki", url: "https://juice-khaki.vercel.app/", file: "juice-khaki.jpg" },
    { name: "PC Master", url: "https://pc-master-chi.vercel.app/", file: "pc-master.jpg" },
    { name: "Radical Customs", url: "https://radical-customs.vercel.app/", file: "radical-customs.jpg" },
    { name: "Restaurants Coral", url: "https://restaurants-coral-two.vercel.app/", file: "restaurants-coral.jpg" },
    { name: "Shoes Ten", url: "https://shoes-ten-orcin.vercel.app/", file: "shoes-ten.jpg" },
    { name: "Catalogo Web", url: "https://catalogo-web-two.vercel.app/", file: "catalogo-web.jpg" },
    { name: "MG Sports", url: "https://mg-sports.vercel.app/", file: "mg-sports.jpg" }
];

const outDir = path.resolve(__dirname, '..', 'public', 'assets', 'live');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
    const browser = await puppeteer.launch({ headless: "new", defaultViewport: { width: 1440, height: 900 } });
    
    for (const site of urls) {
        console.log(`Taking screenshot of ${site.name}...`);
        const page = await browser.newPage();
        try {
            await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
            // wait an extra 5 seconds for WebGL/Three.js animations to load
            await new Promise(r => setTimeout(r, 5000));
            await page.screenshot({ path: path.join(outDir, site.file), type: 'jpeg', quality: 80 });
            console.log(`Saved ${site.file}`);
        } catch (e) {
            console.error(`Error on ${site.name}:`, e);
        }
        await page.close();
    }
    
    await browser.close();
})();
