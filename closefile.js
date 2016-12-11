var fs=require("fs");
var buffer=new Buffer(1000);
fs.open("sivakasi.txt","r+",function(e,fd)
{
    if(e)
    {
        console.log("error occured during open the file");
    }
    else
    {
        console.log("file opened successfully");
        fs.read(fd,buffer,0,buffer.length,0,function(err,a)
        {
            if(err)
            {
               console.log("Error occured during read the file");
            }
            else
            {
                console.log("bytes are:"+a);
                console.log(buffer.slice(0,a).toString());
                fs.close(fd,function(ss)
                {
                    if(ss)
                    {
                        console.log("Error occured  during close the file");
                    }
                    else
                    {
                        console.log("file closed successfully");
                    }
                });
            }
        });
    }
});