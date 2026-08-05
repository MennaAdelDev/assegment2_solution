// Q20: Create a pipeline that reads a file, compresses it, and writes it to another file.

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { pipeline } = require('stream');

function compressFile(inputPath, outputPath) {
    const readStream = fs.createReadStream(inputPath);
    const gzip = zlib.createGzip();
    const writeStream = fs.createWriteStream(outputPath);

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error('Pipeline failed:', err.message);
            return;
        }
        console.log('File compressed successfully.');
    });
}
const dataPath = path.join(__dirname, 'data.txt');
const gzPath = path.join(__dirname, 'data.txt.gz');
fs.writeFileSync(dataPath, 'Some data to be compressed.'.repeat(100));

compressFile(dataPath, gzPath);