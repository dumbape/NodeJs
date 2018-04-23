var http = require('http'); 

function onRequest(request, response){
	console.log('Request Recieved' + request.url);
	if(request.url == '/'){
		response.writeHead(200, {'Content-type': 'html'});
		response.write('Data Sent!');
		response.end();
	}
	else{
		response.writeHead(404, {'Contenyt-Type': 'html'});
		response.write('ERROR 404! Page not found');
		response.end();
	}
}

http.createServer(onRequest).listen(8000);
console.log('Server is now running!');