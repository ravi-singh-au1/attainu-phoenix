var isPowerOfTwo = function(num) {

  n = num;
  
  while(n%2 == 0){
    
    n = Math.floor(n/2);
    
  if(n == 1){
    return true;
  }else{
    return false;
  }
}
console.log(isPowerOfTwo(32))

console.log(isPowerOfTwo(9))
