// Q11: Write a function that creates a folder synchronously.

const fs = require('fs');
const path = require('path');

function createFolderSync(dirPath) {
    try {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log('Success');
        return 'Success';
    } catch (err) {
        console.error(err.message);
    }
}

createFolderSync(path.join(__dirname, 'newFolder'));