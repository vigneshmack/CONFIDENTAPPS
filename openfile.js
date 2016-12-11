var fs=require("fs");
fs.open("plain.txt","r+",function(err,fd)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("file opened successfully");
    }
});
console.log("program finished");