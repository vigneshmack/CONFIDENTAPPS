var fs=require("fs");
var r=fs.createReadStream("dubakoor.txt");
var data="";
function hello(chunk)
{
    data+=chunk;
}
r.on("data",hello);
var welcome=function soon()
{
    console.log("Read completed");
    console.log(data.toString());
}
r.on("end",welcome);
r.on("error",function(e)
{
    console.log(e.stack);
});