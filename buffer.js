buffer1=new Buffer("Hello node.js");
console.log("Buffer1:"+buffer1.toString());
console.log("Buffer1 Length:"+buffer1.length);
buffer2=new Buffer(256);
console.log("Buffer2 Length:"+buffer2.length);
buffer2len=buffer2.write("Node.js  was invented  by RyanDhal");
console.log("Buffer2:"+buffer2.toString('ascii',0,buffer2len));
buffer3=new Buffer([85,74,52,180,63]);
console.log("Buffer3 Length:"+buffer3.length);
var i;
for(i=0;i<buffer3.length;i++)
{
    console.log("Buffer3["+i+"]"+buffer3[i]);
}
buffer4=new Buffer("Node.js is a server side platform");
json=buffer4.toJSON(buffer4);
console.log(json);
con=Buffer.concat([buffer1,buffer4]);
console.log("CONCAT:"+con);
ans=buffer1.compare(buffer2);
if(ans==0)
{
    console.log("BOTH STRINGS ARE EQUAL");
}
else if(ans>0)
{
    console.log("BUFFER1 IS GREATER THAN BUFFER2");
}
else if(ans<0)
{
    console.log("BUFFER2 IS GREATER THAN  BUFFER1");
}
buffer1.copy(buffer4);
console.log("AFTER COPY BUFFER4 IS:"+buffer4);
slice=buffer1.slice(0,5);
console.log("AFTER SLICED BUFFER1 IS:"+slice);
if(Buffer.isBuffer(buffer1))
{
   console.log("Buffer1 obj is a buffer");
}
else
{
    console.log("Buffer1 is not a  buffer");
}