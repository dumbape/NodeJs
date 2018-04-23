var http = require('http');
var url = require('url');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
	console.log('Event Occurred!!!');
}

eventEmitter.on('Go!', myEventHandler);

eventEmitter.emit('Go!');