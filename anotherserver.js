var http=require("http");
http.createServer(ryandhal).listen(8086,"127.0.0.1");
var i=0;
function ryandhal(request,response)
{
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Nothing is impossible");
    console.log(request.url);
    response.write("USER VIEW:"+ ++i);
    response.end();
}
console.log("hello");