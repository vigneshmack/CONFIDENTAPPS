var fs=require("fs");
var w=fs.createWriteStream("theri.txt");
var data="Ya It's me viki";
w.write(data);
w.on("finish",function()
{
    console.log("write completed");
});
var hello=function abc()
{
    console.log("Error occured");
}
w.on("error",hello);
w.end();