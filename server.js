var http=require("http");
var k=0;
http.createServer(function(request,response)
{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello node.js!\n");
    console.log("USER VIEW:"+ ++k +"\n");
    response.write("Be Alert protect yourself\n");
    response.end();
}).listen(8086,"127.0.0.1");
console.log("Always maintain the confident\n");
console.log("ok\n");
