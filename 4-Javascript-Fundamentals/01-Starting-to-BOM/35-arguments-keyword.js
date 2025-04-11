
// Arguments Keyword in JavaScript | 


function add(a, b) {
    console.log(arguments);   // returning array like object // we can not use array method here
    return a + b;  // O/P = 6
}

add(2, 4, 9, 6);

function add2() {
    console.log(arguments);     // [2, 4, 12, 8, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments[0]);  //   2
    console.log(arguments[1]);  //   4
    console.log(arguments[2]);  //   12


    const argumentsArr = [...arguments];    // convert an arguments array like object into an array:
    console.log(argumentsArr);

    const addValus = argumentsArr.reduce( (acc, element, index, arr) => {
        return acc + element;
    }, 0 );

    console.log(addValus);

};

add2(2, 4, 12, 8, 9);

console.log("<<<<<<<<<------------>>>>>>>>>>");

// cant use array methods

// USING ARGUMENTS KEYWORD  and ARGUMENTS IS NOT WORKING ON ARROW FUNCTION

let sum = 0;

function unlimitedAdd() {
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
    return sum;
};

unlimitedAdd(1, 2, 3, 4, 5);

console.log("<<<<<<<<<------------>>>>>>>>>>");


// USING ES6 Rest parameters   
// ES6 REST PARAMETER working on arrow function 

const addition = (...manyArgs) => {
    let summ = 0;
    for( let i =0; i< manyArgs.length; i++) {
        summ = summ + manyArgs[i];
    };
    console.log(summ);
};

addition(1,2,3,4,5,6);

console.log("<<<<<<<<<------------>>>>>>>>>>");



const multiply = (...arg)=> {
  
    console.log(arg);
    
    const returnVal = arg.reduce( (acc, num)=> {
      return acc * num;
    },1 )
    
    
    console.log(returnVal);
    
  }
  
  multiply(2,2,2,2,2);
  
