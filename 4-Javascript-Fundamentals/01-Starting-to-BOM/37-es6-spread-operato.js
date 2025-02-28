
// ES6 Spread Operator 

const nums1 = [ 1, 2, 3, 4];
const nums2 = [ 5, 6, 7, 8, 9, 10];

const myName = "Subham";

// const joinedArray = nums1.concat(nums2);

// Using ES6 spread Operator

// const joinedArray = [...nums1, ...nums2, 10, 11, 12, ...myName];


const joinedArray = [...nums1, ...nums2];

console.log(joinedArray);

const user = {
    name: "Subham",
    age: 25
}

const updatedUser = {...user, city: "coochbehar" };

console.log(updatedUser);



function add () {
    console.log(arguments);

    let sum = 0;
    for(let i =0; i< arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
}


// if i want to pass joinedArray as an argument. // It's working like -- add(1,2 3,4,5,6,7,8,9,10);

add(...joinedArray);   // HERE WE CAN SPREAD an ARRAY AND a STRING BUT CAN NOT SPREAD A NORMAL OBJECT HERE.



// WE USE SPREAD OPERATOR FOR ---->>>

// 1) COPING / UPDATE AN OBJECT.
// 2) COPING / CONCAT ARRAYS.
// 3) Use AS AN ARGUMENT while calling a function.


