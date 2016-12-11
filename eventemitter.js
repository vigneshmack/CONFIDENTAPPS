var e=require("events");
var ee=new e.EventEmitter();
function too()
{
    console.log("listener1 added");
}
ee.on("waseem",too);
var hello=function()
{
    console.log("listener2 added");
}
ee.addListener("waseem",hello);
var listenercount=require("events").EventEmitter.listenerCount(ee,"waseem");
console.log("Befor remove:"+listenercount);
ee.emit("waseem",[hello],[too]);
ee.removeListener("waseem",hello);
var listenerc=require("events").EventEmitter.listenerCount(ee,"waseem");
console.log("After remove:"+listenerc);
ee.removeAllListeners(["waseem"]);
var lisc2=require("events").EventEmitter.listenerCount(ee,"waseem");
console.log("After removeall:"+lisc2);