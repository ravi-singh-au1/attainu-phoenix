function   factorial(n){
  var fact= 1;
  if(n == 0){
    return 0
  }
  if(n < 0){
   
   alert("undefined")
  }
  for(var i =1;i<=n;i++){
      fact = fact*i
  }
  return fact
}

console.log(factorial(0))