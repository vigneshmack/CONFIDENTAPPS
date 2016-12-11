var welcome=function node(az)
{
    process.stdout.write(az);
}
process.stdin.on("data",welcome);