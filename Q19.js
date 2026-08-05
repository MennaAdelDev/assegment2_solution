// Q19: Use readable and writable streams to copy content from one file to another.

const fs = require('fs');
const path = require('path');

function copyFileWithStreams(sourcePath, destPath) {
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destPath);

    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File copied using streams');
    });
    readStream.on('error', (err) => console.error(err.message));
    writeStream.on('error', (err) => console.error(err.message));
}
const sourcePath = path.join(__dirname, 'source.txt');
const destPath = path.join(__dirname, 'dest.txt');
fs.writeFileSync(sourcePath, 'This is the source file content.');

copyFileWithStreams(sourcePath, destPath);