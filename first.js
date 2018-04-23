var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'html'});
	res.write('Hello World! \r\n');
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.write(txt);
	res.end();
}).listen(8000);