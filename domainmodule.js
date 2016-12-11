var domain=require("domain");
var events=require("events");
var d1=domain.create();
var ee=new events.EventEmitter();
d1.add(ee);
ee.on("error",function(err)
{
    console.log(err.message);
});
d1.on("error",function(err)
{
    console.log(err.message);
});
ee.emit("error",new Error("listener1 error"));
ee.emit("error",new Error("listener2 error"));
var d2=domain.create();
var ee2=new events.EventEmitter();
ee2.on("error",function(err)
{
    console.log(err.message);
});
d2.run(function()
{
    ee2.emit("error",new Error("domain2 "));
});