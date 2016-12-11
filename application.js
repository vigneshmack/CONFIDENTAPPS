var express=require("express");
var app=express();
app.get("/",function(request,response)
{
    response.send("Welcome to Express framework");
});
var server=app.listen(8086,function()
{
    var host=server.address().address;
    var port=server.address().port;
    console.log("port:"+port);
    console.log("host:"+host);
});
