
//  forEach Array Method in JavaScript |

// RETURN VAL OF FOR EACH IS ALWAYS UNDEFINED.


const fruits = ["Mango", "Orange", "Banana", "Apple", "Grapes"];

fruits.forEach(function(i) {   // RETURN VAL OF FOR EACH IS ALWAYS UNDEFINED.
    console.log(i.toUpperCase());
    return i;  // for each will ignore this return keyword and return undefined
});


fruits.forEach((currVal, index, arr)=>{   // takes 2 parameters
    console.log(index + " = " + currVal, arr);
});


const add = [1, 2, 3, 4, 5];

let sum = 0;
add.forEach( (a) => {      // Higher order function
    sum = sum + a;
});

console.log(sum);


// complete.....

