// Q1: Write a function that logs the current file path and directory.

function logFileAndDir() {
    console.log({ File: __filename, Dir: __dirname });
}

logFileAndDir();