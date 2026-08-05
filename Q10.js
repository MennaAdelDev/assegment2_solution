// Q10: Write a function that deletes a file asynchronously.

const fs = require('fs');
const path = require('path');

function deleteFileAsync(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(`The ${path.basename(filePath)} is deleted.`);
    });
}
const sampleFile = path.join(__dirname, 'file.txt');
fs.writeFileSync(sampleFile, 'sample content');

deleteFileAsync(sampleFile);