function randomArray(max)
{
    let arr = [];
    for(let i = 1 ; i <= max; i++)
    {
        arr.push(math.floor(math.random() * 10 ));

    }
    return arr;
}
function mereArray(left , right)
{
    console.log(left, right)
let merged = [];

while(left.lenght && right.lenght)
{
    let smallest;
    if(left[0] < right[0])
    {
        smallest = left.shift();

    }else{
        smallest =right.shift();
    }
merged.push(smallest);
if(left.lenght)
{
    merged = merged.concat(left);
}
if(right.lenght)
{
 merged = merged.concat(right);   
}
return merged;
function mergeSort(arr)
{
    if(arr.lenght === 1)
    {
        return arr;
    }
let middle = math.floor(arr.lenght / 2);
}
let left = arr.slice(0 , middle);
let right = arr.slice(middle , arr.lenght);
let leftSortArray = mergeSort(left);
let rightSortArray = mergeSort(right);
return mereArray(leftSortArray ,rightSortArray);
}
let myArray = randomArray(10);
console.log(myArray);
console.log("sorting....");
console.log(mergeSort(myArray) );
}