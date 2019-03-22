var arr = [8,9,45,47,55,60,73]
  // Number to be searched in array 
  var findNumber = 55


const findArray = (arr,number)=>{

    var arrayLength = arr.length;
   
    for(i=0;i<=arrayLength;i++){
      if(arr[i] == number){
        return i;
      }
    }
    return -1
  }
  
  console.log(findArray(arr,findNumber));