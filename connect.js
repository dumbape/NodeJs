var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next){
	console.log('Request 1 Recieved');
	next();
}

function doSecond(request, response, next){
	console.log('Request 2 Recieved');
	next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8000);
console.log('Server is now running!');