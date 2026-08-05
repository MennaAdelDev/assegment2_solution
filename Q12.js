// Q12: Create an event emitter that listens for a "start" event and logs a welcome message.

const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('start', () => {
    console.log('Welcome event triggered!');
});

emitter.emit('start');