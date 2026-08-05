// Q18: Use a readable stream to read a file in chunks and log each chunk.

const fs = require('fs');
const path = require('path');

function readFileInChunks(filePath) {
    const readStream = fs.createReadStream(filePath, {
        encoding: 'utf8',
        highWaterMark: 16 * 1024, // 16KB per chunk
    });

    readStream.on('data', (chunk) => {
        console.log('Chunk:', chunk);
    });

    readStream.on('end', () => {
        console.log('Finished reading file.');
    });

    readStream.on('error', (err) => {
        console.error(err.message);
    });
}
const bigFilePath = path.join(__dirname, 'big.txt');
fs.writeFileSync(bigFilePath, 'This is line one.\n'.repeat(500));

readFileInChunks(bigFilePath);