console.log('hello');
function sumSquare(num) {
    var sum = 0;

    for (var i = 1; i <= num; i++) {

        sum += i * i;
    }
    return sum;
}
function squareSum(num) {
    sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;

    }
    return sum * sum;
}


function main() {
    var sum1 = sumSquare(100);
    console.log(sum1);
    var sum2 = squareSum(100);
    console.log(sum2);
    var diff = sum2 - sum1;
    console.log("diffrence of sums =>" +diff);
}
main();