// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers (numArray) {
    let sum = 0
    let i
    
    for (i=0;i<numArray.length;i++){
        sum = sum + numArray[i]
    }
    return sum
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positiveNumbers" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positiveNumbers([1, -3, 5, -3, 0]) --> [1, 5, 0]
// positiveNumbers([1, 2, 3]) --> [1, 2, 3]
// positiveNumbers([-1, -2, -3]) --> []

function positiveNumbers (numArray){
    var positiveArray = numArray.filter(positiveFunction)
    function positiveFunction(value){
        return value >=0
    }
    return positiveArray
}
