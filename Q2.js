// Q2: Write a function that takes a file path and returns its file name.

const path = require('path');

function getFileName(filePath) {
    return path.basename(filePath);
}

console.log(getFileName('/user/files/report.pdf')); // "report.pdf"