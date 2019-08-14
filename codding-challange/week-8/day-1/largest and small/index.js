 
alert('hello open console here')
// create a function print largest and smallest number
var numbers =[8,9,54,65,24,78,3];
var sorted = numbers.slice().sort(function(a,b)
{
    return a -b ;
});
var smallest = sorted[0];
secondSmallest = sorted[1];
largest =sorted[sorted.length-1];

console.log('smallest =>' + smallest);
console.log('secondsmallest =>' + secondSmallest);
console.log('largest =>' + largest);
