var fs=require("fs");
fs.createReadStream("trustme.txt").pipe(fs.createWriteStream("plain.txt"));
console.log("program ended");