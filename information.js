var fs=require("fs");
fs.stat("thirupatchi.txt",function(err,aa)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Information of the file:");
        console.log(aa);
        console.log("ISFILE:"+aa.isFile());
        console.log("ISDIRECTORY:"+aa.isDirectory());
        console.log("BLOCK DEVICE:"+aa.isBlockDevice());
        console.log("CHARACTER DEVICE:"+aa.isCharacterDevice());
        console.log("SYMBOLIC LINK:"+aa.isSymbolicLink());
        console.log("FIFO:"+aa.isFIFO());
        console.log("SOCKET:"+aa.isSocket());
    }
});
console.log("program completed");