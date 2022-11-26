var events = require('events');
var eventEmitter = new events.EventEmitter();
// this an eventEmitter object
// I don't understand 'new'

var myEventHandler = function () {
    console.log('I hear a scream!');
}
// this is an event handler

eventEmitter.on('scream', myEventHandler);
// this assigns the event handler to an event (in this case, 'scream')

eventEmitter.emit('scream');
