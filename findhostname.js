var dns=require("dns");
dns.reverse("157.240.7.35",function(err,hostname)
{
    if(err)
    {
        console.log("could not able to find hostname");
    }
    else
    {

        console.log(hostname);
    }
});
console.log("program finished");