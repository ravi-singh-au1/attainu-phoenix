// function getMissingNo(num )
// {
//     var arr =[1 , 2 , 4 , 5];
//     var total = (num + 1) * (num + 2) / 2;
//     for( i = 0; i<num; i++ )
//     {
//         total -= arr[i]; 
//     // return total ;
//     console.log(total);    
// }
//     console.log(total);
// }
// // test
// getMissingNo();
// console.log(total);

function absent(arr)
{
    var mia = [];
      var min = Math.min.apply('' , arr );
      var   max=Math.max.apply('' , arr);
    while(min<max)
    {
        if (arr.indexOF(++ min)== -1) 
        mia.push(min);
    }
    return mia;
}
 var arr = [27 , 29 ,30];
  absent();
  console.log();