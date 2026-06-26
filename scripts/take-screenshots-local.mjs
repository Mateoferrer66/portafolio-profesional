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
    console.log("Launching browser in NON-HEADLESS mode to capture WebGL...");
    const browser = await puppeteer.launch({ 
        headless: false, // THIS IS THE KEY TO FIXING WEBGL BLACK SCREENS
        defaultViewport: { width: 1440, height: 900 },
        args: ['--start-maximized']
    });
    
    for (const site of urls) {
        console.log(`Taking screenshot of ${site.name}...`);
        const page = await browser.newPage();
        try {
            await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
            console.log('Waiting 10 seconds for 3D to render...');
            await new Promise(r => setTimeout(r, 10000));
            
            // Scroll down a bit to trigger animations
            await page.evaluate(() => {
                window.scrollBy(0, 400);
            });
            await new Promise(r => setTimeout(r, 2000));
            
            await page.screenshot({ path: path.join(outDir, site.file), type: 'jpeg', quality: 90 });
            console.log(`Saved ${site.file}`);
        } catch (e) {
            console.error(`Error on ${site.name}:`, e);
        }
        await page.close();
    }
    
    await browser.close();
})();
