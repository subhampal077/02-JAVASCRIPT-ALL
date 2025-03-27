// ARRAYS IN JS []

const fruitsCollections = ["Apple", "Mango", "Banana", 'orange'];

// UPDATING THE INDEX 2 ELEMENT
fruitsCollections[2] = "Water Melon";


console.log(fruitsCollections);
// O/P =  ['Apple', 'Mango', 'Water Melon', 'orange']   // UPDATED ARRAY


// ADDING THE INDEX 4 ELEMENT IN THE ARRAY
fruitsCollections[4] = "Lemon";


// ARRAY AFTER ADDING THE 5TH ELEMENT (4TH INDEX)
console.log(fruitsCollections);
// O/P = ['Apple', 'Mango', 'Water Melon', 'orange', 'Lemon']


const myArr2 = ["Apple", 23, null, true, false, undefined, { name: "Subham", details: { age: 23 } }];
// IN AN ARRAY WE CAN ADD ALL DATATYPE OF DATA/ VALUES LIKE string , number, object etc.



// ARRAY METHODS ----------------->>>>>>>>>> PUSH / POP


const nameArr = [ "Subham", "Suman", "Sandip" ];


// PUSH ------ ADDING VALUE TO ARRAY AT LAST INDEX //  MODIFY THE ORIGINAL ARRAY

nameArr.push("duggu", "guddu");

console.log(nameArr);   
// O/P = ['Subham', 'Suman', 'Sandip', 'duggu', 'guddu']


// POP ---------- REMOVE THE LAST INDEX VALUE FROM ARRAY (Only ONE) //  MODIFY THE ORIGINAL ARRAY

nameArr.pop();  // guddu removed // O/P = guddu
// Dont need to pass any ARGUMENT in pop  

console.log(nameArr); 
// O/P = ['Subham', 'Suman', 'Sandip', 'duggu']



// ------------------  JS TIPS / HACKS -------------------

// DO NOT USE !!!!!!!!!!!!!!!!!!

// WE CAN ALSO STORE VALUES IN KEY VALUE PAIR IN ARRAYS BUT IT CAN NOT COUNT/ ADDED THE ARRAY LENGTH. LENGTH WILL ALWAYS SHOW 0 (zero).

// BUT IT IS STRICTLY NOT RECOMENDED TO USE LIKE THAT. JUST FOR KNOWLEDGE WE SHOULD KNOW IT.

// nameArr.firstName = "Subh";
// console.log(nameArr);  

// O/P = ['Subham', 'Suman', 'Sandip', 'duggu', firstName: 'Subh']


