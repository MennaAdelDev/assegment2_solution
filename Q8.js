// Q8: Write a function that resolves a relative path to an absolute one.

const path = require('path');

function resolvePath(relativePath) {
    return path.resolve(relativePath);
}

console.log(resolvePath('./index.js'));