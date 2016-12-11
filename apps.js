var express=require("express");
var app=express();
app.get("/",function(request,response)
{
    console.log("Ryan dhal");
    response.send("hello  node");
});
var expressframework=function framework()
{
    port=server.address().port;
    console.log("server listening at:"+port);
}
var server=app.listen(8086,expressframework);
