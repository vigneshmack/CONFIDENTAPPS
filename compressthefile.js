var fs=require("fs");
var zip=require("zlib");
fs.createReadStream("in.txt").pipe(zip.createGzip()).pipe(fs.createWriteStream("in.txt.gz"));
console.log("file compressed");