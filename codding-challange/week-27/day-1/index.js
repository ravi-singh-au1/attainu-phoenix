function palindromeString(string)
{
    let reversed = '';
    for(let i = 0; i < string.length; i++)
    {
        reversed = string[i] + reversed;
    }
    return string === reversed ? 'it is a palidrome' : 
    'it is not palidrome';
}
console.log(palindromeString("radar"));
console.log(palindromeString("madam"));
console.log(palindromeString("apple"));