// Q5: Write a function that parses a given path and returns its name and ext.

const path = require('path');

function parsePath(filePath) {
    const parsed = path.parse(filePath);
    return { Name: parsed.name, Ext: parsed.ext };
}

console.log(parsePath('/home/app/main.js'));