function printNumber() {

    for (var i = 1; i < 100; i++) {
        if (i % 3 === 0) {
            console.log("Buzz", i)
        }
        if (i % 5 == 0) {
            console.log("FiZZ", i)
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuZZ", i)
        }
    }


}
printNumber();