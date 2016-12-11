var fs=require("fs");
var zlib=require("zlib");
fs.createReadStream("in.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("in.txt"));
console.log("File decompressed");