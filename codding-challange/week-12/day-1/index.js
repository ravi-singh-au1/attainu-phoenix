class MyArray {
  constructor(...array) {
    this.array = array; 
  }
  print() {
  
   console.log(this.array)
  }

  search(number) {
    let num = [];
    num = this.array;
    for(let i=0;i<num.length;i++){
      if(number == num[i]){
        return i
      }
    }
    return -1
  }
}

class MyNumber{
  
  constructor(...numbers){
    this.set = new Set(numbers);
  }
  print(){
    this.set.forEach(function(element){console.log(elment)});
  }
  search(num){
    return this.set.has(num); 
  }
  print(){
    console.log(this.set);
  }
}

myArray = new MyArray(1, 5,7,8,9,6);
myArray.print()
console.log(myArray.search(9));

mySet = new MyNumber(1,5,7,6,8,3,2);
mySet.print()
console.log(MyNumber.search(7));

