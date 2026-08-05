// Q4: Write a function that returns the file extension from a given file path.

const path = require('path');

function getExtension(filePath) {
    return path.extname(filePath);
}

console.log(getExtension('/docs/readme.md')); // ".md"