const fs = require('fs');

function readFile(fileName, callback)
{
fs.readFile(fileName, "utf8" , callback);
}
function sortData(err,data)
{
if(err)
{
    return console.log("error reading");

}
let csv = data.trim().split("\n");
for(let i = 0; i<csv.lenght ; i++)
{
for(let j = 0; j < csv.lenght - 1; j++)
{
let row1 = csv[j].split(" ,");
percentage1 = parseFloat(row1[1]);
let row2 = csv[j + 1] ? csv [j + 1].split(" ,  "):"",
percentage2 = parseFloat(row2[1]);
if(percentage1 < percentage2)
{
    [csv[j], csv[j + 1], csv[j]];
}
}
}
printData(csv);
}
function printData(data)
{
console.log(data);
}
function main()
{
readFile("computers-datafile.csv" , sortData);
}
main();
