
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'shop.astro');
console.log(`Reading ${filePath}...`);

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the start of the script block
    const startMarker = '<script lang="ts">';
    const startIndex = content.indexOf(startMarker);

    if (startIndex === -1) {
        console.error('Could not find <script lang="ts"> in shop.astro');
        process.exit(1);
    }

    // Find the end of the script block
    const endMarker = '</script>';
    const endIndex = content.indexOf(endMarker, startIndex);

    if (endIndex === -1) {
        console.error('Could not find </script> after <script lang="ts">');
        process.exit(1);
    }

    console.log(`Found script block from index ${startIndex} to ${endIndex}`);

    // Extract the part before and after
    const partBefore = content.substring(0, startIndex);
    const partAfter = content.substring(endIndex + endMarker.length);

    // Construct new content
    const newScript = '<script src="../scripts/shopUtils.ts"></script>';
    const newContent = partBefore + newScript + partAfter;

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Successfully updated shop.astro');

} catch (err) {
    console.error('Error processing file:', err);
    process.exit(1);
}
