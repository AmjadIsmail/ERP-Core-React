var http= require('http');
http.createServer(function(req,res){
    res.write("Hello World: Wellcome to this tutioral");
    res.end();
}).listen(8080);