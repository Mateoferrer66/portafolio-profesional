const fs = require('fs');
const path = require('path');

const targetUrl = "mateo-ferrer.pages.dev";
const oldUrl = "mateoferrer.pages.dev";

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (['node_modules', 'dist', '.git'].includes(file)) continue;
            replaceInDir(fullPath);
        } else {
            if (['.astro', '.ts', '.tsx', '.mjs', '.js', '.json'].some(ext => file.endsWith(ext))) {
                let content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes(oldUrl)) {
                    content = content.split(oldUrl).join(targetUrl);
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`Updated: ${fullPath}`);
                }
            }
        }
    }
}

replaceInDir(__dirname);
console.log("Domain replacement complete!");
