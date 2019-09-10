function reverseDigit(num)
{
    var rev_num = 0;
    while(num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
       
    }
    return rev_num;
}
var num = 123 ;
var num2 = 521;
var num3 = 120 ;
var num4 = -120
var num5 = -10

console.log(reverseDigit(num));
console.log(reverseDigit(num2));
console.log(reverseDigit(num3));
console.log(reverseDigit(Math.abs(num4)));
console.log(reverseDigit(Math.abs(num5)));
