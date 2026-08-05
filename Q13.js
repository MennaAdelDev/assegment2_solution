// Q13: Emit a custom "login" event with a username parameter.

const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('login', (username) => {
    console.log(`User logged in: ${username}`);
});

function loginUser(username) {
    emitter.emit('login', username);
}

loginUser('Ahmed');