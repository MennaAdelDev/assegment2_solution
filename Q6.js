// Q6: Write a function that checks whether a given path is absolute.

const path = require('path');

function isAbsolutePath(filePath) {
    return path.isAbsolute(filePath);
}

console.log(isAbsolutePath('/home/user/file.txt')); // true