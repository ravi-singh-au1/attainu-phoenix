
function Permutation(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    Permutation(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};
var permArr = [],
  usedChars = [];

console.log(Permutation(["A", "B" , "C"]));
