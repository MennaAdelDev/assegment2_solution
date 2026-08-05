// Q15: Write asynchronously to a file.

const fs = require('fs');
const path = require('path');

function writeFileAsync(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(`File written successfully to ${filePath}`);
    });
}

const asyncPath = path.join(__dirname, 'async.txt');
writeFileAsync(asyncPath, 'Async save');