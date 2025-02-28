
// Variables and Scope --------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// aa = "sub";

// console.log(aa.length);

// const gg = () => {
//     var me = "Cob";

//     bb = "jio";

//     console.log(me);

// };

// console.log(bb); // bb is not defined at this line

// console.log(me);  // o/p = here me is not defined so the scope of var is function- scoped

// gg ();


// { var firstName = "Subham";

// console.log(aa);

// }



// let lastName = "Pal";
// let age = 15;
// const dob = 1999;

// console.log(firstName);

// console.log(lastName);



// ------------------------------------------------->>>>>>>>>>>>>>>>>>>>


// Dialog Boxes in JS ----------->>>>>>>>>>>>


// const a = alert("lol")
// console.log (a);
//const a = confirm("lol")
//const a = prompt("lol")


// ------------------------------------------------------------


// String properties and Methods ------------>>>>>>>>>>>>

// const msg = "Hi, I am subham";

// console.log(msg.includes("Sub"));    // o/p = false

// console.log(msg.includes("sub"));   // o/p = true

// console.log(msg.includes());  // op = false

// console.log(msg.indexOf());   //  o/p =  -1

// console.log(msg.indexOf("I"));  // o/p =  4

// console.log(msg.indexOf("Q"));   //  o/p =  -1


// --------------------------------------------------------- CLOSURE rough

let b = 4;         

function fun(){
     let a = 2;
     function func2(){
        return b;
     }
     return func2();
}
console.log(fun());

//-----------------------------------------------------------  HOISTING rough
greeting();

function greeting(){
    console.log("Hello");
   
}


// ------------------------------------------------------------  anonymous function rough

var fun3 = function(){
    console.log("hi")
}
fun3();




