process.on("beforeExit",function()
{
    console.log("hello");
    var high=function low()
    {
        console.log("high or low");
    }
    setTimeout(high,4000);
});
console.log("node.js,javascript");
console.log("c");