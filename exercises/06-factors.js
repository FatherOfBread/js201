// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors (fNum){
var i
var fctrs = []
for (i=1; i<=fNum; i++) {
    if (fNum%i==0){fctrs.push(i)}
}
return fctrs
}
//console.log(factors (20))