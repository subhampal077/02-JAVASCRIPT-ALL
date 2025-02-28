
// for of vs for in Loop in JavaScript | ES6 |


// FOR OF NOT WORKING ON OBJECT coz objects in not iterable.

//So we need to use FOR IN LOOP in object


const fruits = ["Mango", "Orange", "Banana", "Apple", "Grapes"];

// USING FOR LOOP 

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// };


// USING FOR OF LOOP

for( let i of fruits) {    // for of
    console.log(i);
};

// O/P  =  
//     Mango
//     Orange
//     Banana
//     Apple
//     Grapes


// USING FOR OF LOOP IN STRING

const userName = "Subham";

for(let i of userName) {    // for of 
    console.log(i);
};

//--------------------------------------------------------

const add = [1, 2, 3, 4, 5];

let sum = 0;

// for (let i = 0; i < add.length; i++) {   // for loop
//     sum = sum + add[i];
// };

for(const i of add) {    // for of loop
    sum = sum + i;
};

console.log(sum);


// -----------------------------------------------



// FOR IN LOOOOP for not iterable OBJECT (only one way to use loop in objects)


const person = {
    firstName: "Subham",
    lastName: "Pal",
    age: 25
};

for(let key in person) {
    console.log(key, ": ", person[key]);    // have to use BRACKET NOTATION
    // DOT NOTATION person.key will not work here
};

console.log("<<<<<<<<<----------------->>>>>>>>>>>");


// WRITE WAY TO RUN  FOR OF loop IN OBJECT (RECOMENDED TO USE)


const personKeys = Object.keys(person);          // to collect all the keys of an OBJECT
const personValues = Object.values(person);     //  to collect all the values of an OBJECT
const personEntries = Object.entries(person);   //  to collect all the keys and values together in array format

for(let keyyy of personKeys) {
    console.log(keyyy, " = ", person[keyyy]);
};

console.log("<<<<<<<<<----------------->>>>>>>>>>>");

for (let keyss of personValues) {
    console.log(keyss);
};

console.log("<<<<<<<<<----------------->>>>>>>>>>>");

for(const abc of personEntries) {
    console.log(abc);
};



