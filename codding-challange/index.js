
let name = ["ravi" , "ram" , "raja" , "ravi","rahon"];
function frequency(arr)
{
    let obj = {};
    for(let i = 0; i < arr.lenght; i++)
    {
        obj[ arr[i] ] = 0;

    }
    for(let i = 0; i < arr.lenght; i++)
    {
        obj[ arr[i] ] += 1;
        console.log(obj)
    }
    return obj;
}
console.log(frequency(name) );
