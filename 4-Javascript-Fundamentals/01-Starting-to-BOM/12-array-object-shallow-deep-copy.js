
// RIGHT WAY TO COPY OBJECT AND ARRAYS



// const username1 = "Akash";

// let username2 = username1;

// username2 = username2 + " Pal";

// STRINGS ARE SHARING DIFFERENT LOCATIONS IN MEMORY, so if we update one string, the other string will NOT update 


// ------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// OBJECTS and ARRAYS ARE SHARING SAME LOCATIONS IN MEMORY, so if we update one array/object both will update together


// const fruits = ['Mango', 'Apple', 'Orange'];

// const myFruits = fruits;

// myFruits.push('Dates');
// myFruits.push('Grapes');


// const user1 = {
//     firstName: "Subham",
//     lastName: "Pal"
// }

// const user2 = user1;

// user2.lastName = "Basu";


// --------------------------------------------------


// NOW RIGHT WAY TO COPY ONE OBJECT INTO ANOTHER OBJECT


const user1 = {
    firstName: "Subham",
    lastName: "Pal"
};

// const user2 = {};

// Object.assign( user2, user1);

// user2.lastName = "Bose";

// console.log(user2);  // O/P = {firstName: 'Subham', lastName: 'Bose'}


// AFTER ES6 WE CAN COPY ONE OBJECT INTO ANOTHER OBJECT USING SPREAD OPERATOR ---->>>>

const user2 = { ...user1 };   // user1 object copied to user2 object  // ES6 SPREAD OPERATOR

user2.lastName = "Roy";  // Updated

console.log(user2);   // O/P = {firstName: 'Subham', lastName: 'Roy'}


// ---------------------------------------------


// NOW RIGHT WAY TO COPY ONE ARRAY INTO ANOTHER ARRAY ----

const fruits = ['Mango', 'Apple', 'Orange'];

// const myFruits = [];

// Object.assign(myFruits, fruits);


// myFruits.push("Banana");
// console.log(myFruits);  // O/P = ['Mango', 'Apple', 'Orange', 'Banana']


// ------------------- USING ES6 SPREAD OPERATOR --------------


// const myFruits = ["Grapes", ...fruits ];    // ES6 SPREAD OPERATOR  // ['Grapes', 'Mango', 'Apple', 'Orange']


// -------------- USING CONCAT() METHOD ----------------

// const myFruits = [].concat(fruits);   // copied using concat


// ---------- USING SLICE() METHOD ------------

const myFruits = fruits.slice(0);  // OR, fruits.slice();  // copied using slice()

myFruits.push("Banana");
console.log(myFruits);  // O/P = ['Mango', 'Apple', 'Orange', 'Banana']


// This TWO methods of copy is called SHALLOW COPY (one level deep copy )
// (  spread operator and    Object.assing(object2, object1) )


// -------------------------------------

// To copy nested OBJECT and multidimensional ARRAY we have use DEEP COPY will learn later


