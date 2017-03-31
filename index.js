var http = require('http');
var port = 3000;
function sum(a,b){
a+b;
return
}


var server = http.createServer(function(request, response) {
    console.log(request.url)
   var number =  request.url.split("/")[1].split("+");
   var a = number[0];
   var b = number[1];
   var x = Number(a);
   var y = Number(b);
   console.log(a)
   console.log(b)
   console.log(x+y);
   var z = x+y
var result = z.toString()
      response.end(result)

    switch (request.url) {
        case '/':
            response.end("Hello");
            break;
            // case '/':
            // response.end(x+y);
            // break;
            default:        
   response.end("Error");
             break;
    }
});


server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
});

sum (4,8)
