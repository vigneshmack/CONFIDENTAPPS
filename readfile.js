var fs=require("fs");
var b=new Buffer(1024);
fs.open("plain.txt","r+",function(err,a)
{
    if(err)
    {
        console.log("error occured  during open the file");
    }
    else
    {
        console.log("file opened successfully");
        fs.read(a,b,0,b.length,0,function(err,x)
        {
            if(err)
            {
               console.log("error occured during read the file");
            }
            else
            {
                    console.log(x+" bytes are there");
                    var data= b.slice(0,x);
                    console.log(data.toString());
            }
        });
    }
});
console.log("program ended");