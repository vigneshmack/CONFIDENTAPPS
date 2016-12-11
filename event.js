var e=require("events");
var emo=new e.EventEmitter();
var eventhandler1=function a()
{
    console.log("event handler1 executed");
}
emo.on("viki",eventhandler1);
emo.emit("viki");
emo.on("vino",function()
{
    console.log("event handler2 executed");
});
emo.emit("vino");
emo.on("radha",hello);
function hello()
{
    console.log("event handler3 executed");
}
emo.emit("radha");
console.log("program ended");