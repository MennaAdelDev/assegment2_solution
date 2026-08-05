// Q7: Write a function that joins multiple segments

const path = require('path');

function joinSegments(...segments) {
    return path.join(...segments);
}

console.log(joinSegments('src', 'components', 'App.js'));