

// ES6 Rest Parameter

// so, Rest parameter is similar to arguments keyword. But uses of argument keyword is not recommended. so that is why we use Rest parameter when es6 invented. 

// you can say that spread operator spread all the values, in the other hand rest parameter collect all the values and put it in an ARRAY..


const nums = [1, 2, 3, 4, 5];


//  ADDITION USING ARGUMENTS KEYWORD  //

// const add = function() {
//     let sum = 0;
//     console.log(arguments);
//     for( let i =0; i<arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// }

// add(...nums);    // spread operator.


// ADDITION USING REST parameter...   instead of arguments keyword.

const add = function (...nums) {     // implementing rest params
    console.log(nums);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}

add(...nums);   // spread operator.
// add(1,2,3,4,5,6,7,8,9,10);

// we use spread operator at the time of function call..  and we use rest parameter as a parameter when we define the function.

// REST PARAMETER MUST BE THE LAST PARAMETER...

const demo = (a, b, c, ...num) => {
    console.log(a, b, c);   // 1 2 3
    console.log(num);   // [4, 5, 6, 7, 8, 9, 10] (array format)
}

demo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("**************************");

const add2 = function (...nums) {     // implementing rest params
    console.log(nums);

    return nums.reduce( (acc, num) => acc+num );

    // const add2Result = nums.reduce( (acc, num, i ,arr) => {
    //     return acc + num;
    // },0 );

    // console.log(add2Result);
}

console.log(add2(...nums));   


//ended....