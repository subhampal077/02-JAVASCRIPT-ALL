
// import and export in js   // ES6 Modules


import mySurname ,{ usersData, name as myName, myAge } from "./usersData.js";
import {productsData} from "./productsData.js";
import myAddress from "./productsData.js";

import * as something from "./usersData.js";  // imported all the exported files at once as an object

// console.log(something.default);  // Pal
console.log(something);

console.log(usersData[0]);
console.log(myName, mySurname, myAge);

console.log(productsData[0]);
console.log(myAddress.myCity, myAddress.myPin);



// scope of module //


// when we use js file type module. all the variable of global scope(global variables) moves to module scope. so we can not access then from console directly.  and when we use type module defer automatically added with js file.

// myName = "Subham";  // error myName is not define
// if we create a variable without let, var, const then it will create a variable in window object and it will global scoped. but when we use type module, it will give an error.  use strict automatically added


// NOTE ---->>>>

// javascript 1st import and execute the import file then it will execute the script file.