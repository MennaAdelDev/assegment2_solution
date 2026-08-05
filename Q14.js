// Q14: Read a file synchronously and log its contents.

const fs = require('fs');
const path = require('path');

function readFileSyncAndLog(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`the file content => "${content}"`);
    return content;
}

// Create a sample notes.txt file first so we have something to read
const notesPath = path.join(__dirname, 'notes.txt');
fs.writeFileSync(notesPath, 'This is a note.');

readFileSyncAndLog(notesPath);