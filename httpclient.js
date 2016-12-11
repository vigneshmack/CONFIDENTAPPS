var http=require("http");
var data="";
function fileinformation()
{
    localhost:"127.0.0.1";
    port:"8086";
    path:"/ser.html";
}
function filedata(res)
{
    res.on("data",function(a)
    {
        serverdata+=a;
    });
    res.on("end",function()
    {
        console.log("data:"+data);
    });
}
var e=http.request(fileinformation,filedata);
e.end();