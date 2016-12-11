var fs=require("fs");
fs.writeFile("theri.txt","hello my dear...",function(err,a)
{
    if(err)
    {
        console.log("error occured during write the file");
    }
    else
    {
        console.log("written successfully");
        fs.readFile("theri.txt",function(err,c)
        {
              if(err)
              {
                 console.log("error occured during read the file");
              }
              else
              {
                  console.log(c.toString());
              }
        });
    }
});
console.log("program completed");
