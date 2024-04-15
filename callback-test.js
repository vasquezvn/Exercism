

const squareLength = 5;
const squareSide = 6;

// Caller function takes a callback function
function applyToSquare(callback) {
    return callback(squareLength);
}


// Callback must expect the possible argument from the calling function
function areaOfSquare(number) {
    return number * number;
}


console.log(applyToSquare(function squarePerimeter(side) {
    return side * 4;
}))


console.log(applyToSquare(areaOfSquare));
