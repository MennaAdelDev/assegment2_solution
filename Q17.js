// Q17: Write a function that returns the OS platform and CPU architecture.

const os = require('os');

function getOSInfo() {
    return { Platform: os.platform(), Arch: os.arch() };
}

console.log(getOSInfo());