var express = require('express');
var http = require('http');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.send('This is the homepage');
});

app.get('/first', function(request, response){
	response.send('This is the first page');
});

// express parameters

app.get('/sample1', function(request, response){
	response.sendFile(__dirname + '/sample1.html');
});

app.get('/sample2', function(request, response){
	response.sendFile(__dirname + '/sample2.html');
});

app.get('/profile/:id', function(request, response){
	var data = {age: 19, job: 'student', hobbies: ['eating', 'fighting', 'drawing', 'dancing']};
	response.render('profile', {number: request.params.id, data: data});
});



app.listen(8000);