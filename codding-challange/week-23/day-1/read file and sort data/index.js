const fs = require("fs");
function readFile(fileName , callback)

{
fs.readFile(fileName,"utf" ,callback)
}
function sortData(err,data)
{
if(err)
{
    return console.log("error read file");
    printData(data);
}
}
function printData()
{
console.log(data);
}
function main()
{
readFile("computer-datafile.csv", sortData);
}
main();