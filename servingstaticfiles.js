var express=require("express");
var app=express();
app.use(express.static("pictures"));
app.get("/",function(request,response)
{
    console.log("GOT THE REQUEST");
    response.send("This program for serve the static files");
});
var findport=function hellonode()
{
    var port= server.address().port;
    console.log("server listen at:"+port);
}
var server=app.listen(8086,findport);