var express = require ("express");
var server = express ();

server.use(express.static(__dirname + "/public"));

  server.get('/', function(request, response){
    response.sendFile('public/html/index.html', { root: __dirname });
  });

server.get("/signup", function(request, response){
  response.sendFile('public/html/signup.html', { root: __dirname });
});

server.get("/login", function(request, response){
  response.sendFile('public/html/login.html', { root: __dirname });
});


  server.listen(8080, function(){
    console.log('now listening on port...',8080);
  });
