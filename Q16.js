// Q16: Check if a directory exists.

const fs = require('fs');
const path = require('path');

function checkExists(targetPath) {
    const exists = fs.existsSync(targetPath);
    console.log(exists);
    return exists;
}
const notesPath = path.join(__dirname, 'notes.txt');
fs.writeFileSync(notesPath, 'This is a note.');

checkExists(notesPath);