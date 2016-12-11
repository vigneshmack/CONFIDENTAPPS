var fs=require("fs");
var bb=new Buffer(1024);
fs.open("trustme.txt","r+",function(err,fd)
{
   if(err)
   {
       console.log("error occured during open the file");
   }
   else
   {
       console.log("file opened successfully");
       fs.ftruncate(fd,15,function(err)
       {
           if(err)
           {
               console.log("error occured during truncate");
           }
           else
           {
                console.log("truncate succesfully");
                fs.read(fd,bb,0,bb.length,0,function(er,bytes)
                {
                    if(er)
                    {
                        console.log("error occured during read the file");
                    }
                    else
                    {
                        console.log(bytes+ "are read");
                        console.log(bb.slice(0,bytes).toString());
                        fs.close(fd,function(err)
                        {
                            if(err)
                            {
                                console.log("error occured during close the file");
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
   }
});
console.log("program ended");
