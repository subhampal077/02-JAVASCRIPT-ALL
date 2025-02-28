
// ES6 default parameter


// here if we pass nothing on b then by default the b parameter value will be 1  ,,  if we the value of b then default parameter value will be override by the given value of b
 
const multiply = function (a, b = 1 ) {
    return a * b;
}

console.log( multiply(5, 8) );

console.log( multiply(5, undefined) );  // if we pass b value = undefined then also it will take the default param value which was 1.



const rollDie = function(numOfSides = 6) {
    return Math.floor(Math.random() * numOfSides) + 1;
}

console.log(rollDie(10));


// before es6 default parameter

function rollDie2 (numOfSides) {
    if(numOfSides === undefined) {
        numOfSides = 6;
    }
    return Math.floor(Math.random() * numOfSides) + 1;
}

console.log(rollDie2(10));


