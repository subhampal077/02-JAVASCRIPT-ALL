
//  Reduce in JavaScript |

const numbers = [1, 2, 1, 2, 1, 2];

const reduceNumber = numbers.reduce((accumulator, element, index, arr) => {
    console.log(accumulator, element);
    return accumulator + element;   // 0+9 = 9
}, 0 );

// If we pass accumulator val 0 then at first time acc val is 0 then, 2nd time the acc val wull be 0 + 1st element val of array.. 

// if we dont pass any val to acc then the 1st time acc val will be the val of 1st element of array..

console.log(reduceNumber);


