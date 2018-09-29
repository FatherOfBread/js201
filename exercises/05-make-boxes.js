// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function repeatChar (size, char) {
    var i
    var repeat = ""
    for (i=0; i<size; i++){
        repeat = repeat + char
    }
    return repeat
}

function makeSquare (size) {
    var row = repeatChar (size, "*")
    var square = ""
    for (i=0; i<size; i++){
        square = square + row + "\n"
    }
    square = square.substring(0,square.length-1)
    return square
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (width, height) {
    var i
    var solid = repeatChar (width,"*")
    var top = ""
    var bottom = ""
    var middle = ""
    
    if (height>0){top = solid}
    if (height>1){bottom = "\n" + solid}

    for (i=1; i<height-1; i++){
        middle = middle + "\n" + "*" + repeatChar(width-2," ") + "*"
    }
    return top + middle + bottom
}
//console.log(makeBox (5,0))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner (bannerText) {
    var i
    var width = bannerText.length + 4
    var solid = repeatChar (width,"*")
    var center = "\n* " + bannerText + " *\n"
    
    return solid + center + solid
}
