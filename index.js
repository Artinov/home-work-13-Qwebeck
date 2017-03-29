var http = require('http');
var port = 3000;
function sum(a,b){
a+b;
return
}
var numbers = []

var server = http.createServer(function(request, response) {
    switch (request.url) {
        case '/':
            response.end("Hello");
            break;
            case '/a+b':
            response.end(sum(9,8));
            break;
            default:        
   response.end("Why it is so hard!?");
             break;
            

    }
});


server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
});

sum (4,8)
