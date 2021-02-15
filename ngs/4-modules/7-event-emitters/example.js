const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout


const myEmitter = new EventEmitter();

// Subscribe to listen for 'TEST_EVENT'
myEmitter.on('TEST_EVENT', () => {
    console.log("TEST_EVENT was fired.")
})


myEmitter.emit('TEST_EVENT'); // emit trigger for 'TEST_EVENT' on first pass - will fire 1 time

setImmediate(() => {
    myEmitter.emit('TEST_EVENT'); // emit trigger on second pass - will fire 3 times
})


myEmitter.on('TEST_EVENT', () => {
    console.log("TEST_EVENT was fired.")
})

myEmitter.on('TEST_EVENT', () => {
    console.log("TEST_EVENT was fired.")
})