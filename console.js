console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");

var events=require("events");
var ee=new events.EventEmitter();
var welcome=function too()
{
    console.log("listener2 added");
}
ee.on("viki",welcome);
ee.on("viki",function()
{
    console.log("listener3 added");
});
function hello()
{
    console.log("listener1 added");
}
ee.on("viki",hello);
ee.emit("viki");

var count=require("events").EventEmitter.listenerCount(ee,"viki");
console.log(count+" listeners presented in event");


console.timeEnd('Getting data');

console.info("Program Ended")