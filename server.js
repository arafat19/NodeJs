//Creating Basic Server///////
/*
 var http = require('http');

 function onRequest(request, response){
 console.log("A User made a request " + request.url);
 response.writeHead(2000, {'Context-Type': "text/plain"});
 response.write("Here is some data");
 response.end();
 }
 http.createServer(onRequest).listen(8888 );
 console.log('Server is running ...');*/


/////--------- Simple Web File Server ---------/////

/*
 var http = require('http');
 var fs = require('fs');

 function send404Response(response) {
 response.writeHead(404, {"Content-Type": "text/plain"});
 response.write("Error 404: Page not found!");
 response.end();
 }

 function onRequest(request, response) {

 if (request.method == 'GET' && request.url == '/') {
 response.writeHead(200, {"Content-Type": "text/html"});
 fs.createReadStream("./index.html").pipe(response);
 } else {
 send404Response(response);
 }
 }

 http.createServer(onRequest).listen(8888);
 console.log('Server is running ...');*/


/////--------- Servers Using Connect ---------/////

var connect = require('connect');
var http = require('http');

var app = connect();

/*function doFirst(request, response, next){
    console.log('Bacon');
    next();
}

function doSecond(request, response, next){
    console.log('Me');
    next();
}*/
///// --- Handle multiple request from user ------ \\\\\\

function profile (request, response){
    console.log('Use requested for Profile');
}

function forum (request, response){
    console.log('Use requested for Forum');
}
///// --- Handle multiple request from user ------ \\\\\\

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log('The Server is running ...');