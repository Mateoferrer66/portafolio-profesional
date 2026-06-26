import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
    { name: 'Coffee Lemon', url: 'https://coffee-lemon-seven.vercel.app/', file: 'coffee-lemon.jpg' },
    { name: 'Esmeralds', url: 'https://esmeralds.vercel.app/', file: 'esmeralds.jpg' },
    { name: 'Impcel', url: 'https://impcel.vercel.app/', file: 'impcel.jpg' },
    { name: 'Juice Khaki', url: 'https://juice-khaki.vercel.app/', file: 'juice-khaki.jpg' }
];

const outDir = path.resolve(__dirname, '..', 'public', 'assets', 'live');

(async () => {
    const browser = await puppeteer.launch({ 
        headless: 'new', 
        defaultViewport: { width: 1440, height: 900 },
        args: ['--use-gl=egl', '--ignore-gpu-blocklist', '--enable-webgl']
    });
    
    for (const site of urls) {
        console.log(`Taking screenshot of ${site.name}...`);
        const page = await browser.newPage();
        try {
            await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 90000 });
            console.log('Waiting 15 seconds for WebGL...');
            await new Promise(r => setTimeout(r, 15000));
            
            // Scroll down a bit to trigger animations
            await page.evaluate(() => {
                window.scrollBy(0, 300);
            });
            await new Promise(r => setTimeout(r, 3000));
            
            await page.screenshot({ path: path.join(outDir, site.file), type: 'jpeg', quality: 90 });
            console.log(`Saved ${site.file}`);
        } catch (e) {
            console.error(`Error on ${site.name}:`, e);
        }
        await page.close();
    }
    
    await browser.close();
})();
