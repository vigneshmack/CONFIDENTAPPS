var express=require("express");
var app=express();
app.get("/",function(request,response)
{
    console.log("GOT THE REQUEST FOR HOMEPAGE");
    response.send("hello node.js welcome to express framework");
});
app.get("/welcomeuser",function(request,response)
{
    console.log("GOT THE REQUEST FOR USERPAGE");
    response.send("welcome user");
});
app.post("/",function(request,response)
{
    console.log("GOT THE REQUEST FOR POST");
    response.send("post purpose");
});
app.post("/userpost",function(request,response)
{
    console.log("GOT THE REQUEST TO POST USERNAME");
    response.send("post username");
});
app.delete("deleteuser",function(request,response)
{
    console.log("GOT THE REQUEST TO DELETE THE USER");
    response.send("delete user");
});
app.get("/vi*sh",function(request,response)
{
    console.log("GOT THE REQUEST FOR USERNAME");
    response.send("pattern match");
});
function find()
{
    var port=server.address().port;
    console.log("server listen at:"+port);
}
var server=app.listen(8086,find);