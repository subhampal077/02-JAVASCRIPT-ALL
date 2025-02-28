
// LEXICAL SCOPE AND BLOCK SCOPE


// debugger;

const username = 'Subham';
let userAge = 25;
var a = 50;

function subtract() {
    const x = 15;
    const y = 12;
    const z = 100;
    console.log(x - y);
    console.log(username);

    function child() {
        // debugger
        const childNmae = "Golu";
        const childAge = 13;
        
        //BLOCK SCOPE------------->>>>>>>>>
        {
            // let num1 = 500000;    // to access consol.log num1 in not define coz let/ const is BLOCK SCOPED

            var num1 = 500000; // We can access it in consol.log coz var is function scoped
        }

        console.log(num1);

        console.log(childAge, childNmae, username, z);  // O/P = 13 'Golu' 'Subham'
    };

    child();

};

subtract();

console.log('Program Ended');


// The scope of child function is child's own scope plus its parents means subtract function's scope plus the outer scope means the global scope. So the total combination of all the scope is called LEXICAL SCOPE.

