var fs=require("fs");
var aa=function viki(e,d)
{
    if(e)
    {
       console.log(e);
    }
    else if(d)
    {
        console.log(d.toString());
    }
}
fs.readFile("sivakasi.txt",aa);
console.log("program ended");