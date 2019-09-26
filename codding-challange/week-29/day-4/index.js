
module.exports = Parentheses = (function() {
    var _isParenthesesMatch = function(str) {
      var parentheses = str.length;
      var rightParentheses = '(';
      var leftParentheses = ')';
      var rightCount = 0;
      var leftCount = 0;
  
      for(i=0;i<=str.length;i++){
         if(rightParentheses == str.charAt(i))
         {
            rightCount++;
         }
         else if(leftParentheses == str.charAt(i))
         {
            leftCount++;
         }
      }
  
      if(rightCount == leftCount){
        return true;
      }
      else(rightCount != leftCount){
        return false;
      }
  
    }
}());