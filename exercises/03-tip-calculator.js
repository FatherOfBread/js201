// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// bad --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

var bill, percent, people;

function tipValue (qual){
    if (qual == "good") {
        percent=20;
    } else if (qual == "fair") {
        percent=15;
    } else if (qual =="bad") {
        percent=10;
    }
}

function tipAmount (bill,quality) {
    tipValue(quality)
    return percent*bill/100;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

function totalAmount (bill,quality)  {
    return bill + tipAmount (bill,quality) 

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

function splitAmount (bill,quality,people) {
    return totalAmount (bill,quality) / people
}