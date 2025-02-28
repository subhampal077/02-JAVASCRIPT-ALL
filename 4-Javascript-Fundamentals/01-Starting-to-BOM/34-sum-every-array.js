
// Some and Every Array Method in JavaScript | 


// SOME = if only one return val is true then the whole return val will be true.


const oddNums = [1, 3, 5, 6, 7, 9];

console.log( oddNums.some((element, index, arr) => {
    console.log(element);
    return "Subham";   // O/P = true
})
);  // if we not return anything then the return value will be false instead of undefined. if we retuen truthy val then o/p will be true, else if we use falsy val then o/p will be false.

const result = oddNums.some( (element, index) => {
    // debugger
    if(element % 2 === 0) {
        console.log(element, index);  // 6 /  3
    };

    return element % 2 === 0;  // true
    // return element > 4;  // when the return val will be true the some method will stop checking for other array elements, it comes out of loop and print the return val true.
});

console.log(result);   // O/P = true.

// --------------------------------------------


// EVERY = if ALL the return val is true then the whole return val will be true, otherwise false.

const evenNums = [ 2, 4, 6, 7, 8];

const result2 = evenNums.every( (element, index) => {
    // debugger
    if( element % 2 !== 0) {
        console.log(index, element);   //  3  /  7
    };

    return element % 2 === 0;    // false.
});

console.log(result2);  // O/P = false.