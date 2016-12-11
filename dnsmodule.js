var dns=require("dns");
dns.lookup("www.facebook.com",function(err,ipaddress)
{
    if(err)
    {
        console.log("could not able to find ip address");
    }
    else
    {
        console.log("Facebook (ip address)"+ipaddress);
        dns.reverse(ipaddress,function(err,hostname)
        {
            if(err)
            {
                console.log("could not able to find hostname");
            }
            else
            {
                console.log("IPADDRESS:"+ipaddress);
                console.log(JSON.stringify(hostname));
            }
        });
    }
});
console.log("program completed");