
// Returning Functions with Closures in JavaScript |



function parent() {  // HIGHER ORDER FUNC coz parent func returns another func call add.

    const a = 4;
    const b = 6;

    function add() {
        console.log(a + b);  // CLOSURE
    };

    return add;

};

const add1 = parent();

console.dir(add1);
add1();

// console.log(a, b);  // cant access a and b here not definrd