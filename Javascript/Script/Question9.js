function isfizzBuzz(num) {
    if (`${typeof (num)}` != 'number') {
        return (`Nan Not a Number! Please Input Number`)
    }
    else {
        if (num % 3 == 0 && num % 5 == 0) {
            return (`FizzBuzz`)
        }
        else if (num % 3 == 0) {
            return (`Fizz`)
        }
        else if (num % 5 == 0) {
            return (`Buzz`)
        }
        else {
            return (`some odd number entered:${num}`)
        }
    }
}
