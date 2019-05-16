 
var c=0; var d=true;
function timer()
{
    setInterval("count()",1000);

}
function count()
{
if(d==true){
    document.getElementById("text").value=c;
    c++;
}}
