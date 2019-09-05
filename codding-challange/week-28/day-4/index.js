function primeNumber(limit) {
 
    var bools = [];
    var primes = [];
  
    for (var i = 1; i < limit; i++) 
    { bools.push(true); } 
  
      for (var i = 2; i < limit; i++) {
      if (bools[i-2]) {
        for (var j = i*2; j <= limit; j += i) {
          bools[j-2] = false;   
          
        }
        
    }
      
}
     for (var p = 0; p < bools.length; p++) {
      if (bools[p]) { primes.push(p+2); }
       }
     console.log(primes);   
    // return primes; 
  } 
  
  primeNumber(100);
 