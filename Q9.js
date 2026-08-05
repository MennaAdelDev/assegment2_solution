// Q9: Write a function that joins two paths.

const path = require('path');

function joinTwoPaths(p1, p2) {
    return path.join(p1, p2);
}

console.log(joinTwoPaths('/folder1', 'folder2/file.txt'));