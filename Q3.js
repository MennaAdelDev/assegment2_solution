// Q3: Write a function that builds a path from an object

const path = require('path');

function buildPath(obj) {
    return path.format(obj);
}

console.log(buildPath({ dir: '/folder', name: 'app', ext: '.js' })); // "/folder/app.js"