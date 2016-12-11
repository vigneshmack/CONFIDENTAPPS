var fs=require("fs");
console.log("I am going to create a directory");
fs.mkdir("/much/test",function(err)
{
    if(err)
    {
        console.log("error occured during create the directory");
    }
    else
    {
        console.log("created directory succesfully");
    }
});
