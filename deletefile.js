var fs=require("fs");
fs.unlink("ou.txt",function(err)
{
    if(err)
    {
        console.log("error occured during delete the file");
    }
    else
    {
        console.log("file deleted successfully");
    }
});
console.log("program completed");
