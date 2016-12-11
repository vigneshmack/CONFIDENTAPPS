var http=require("http");
var url=require("url");
var fs=require("fs");
http.createServer(function(request,response)
{
    var filename= url.parse(request.url).pathname;
    console.log(filename+" recieved");
    fs.readFile(filename.substr(1),function(err,data)
    {
        if(err)
        {
            response.writeHead(404,{"Content-Type":"text/html"});
            response.write("page not  found");
        }
        else
        {
            response.writeHead(200,{"Content-Type":"text/html"});

            response.write(data.toString());
        }
        response.end();
    });
}).listen(8086,"127.0.0.1");
console.log("program completed");