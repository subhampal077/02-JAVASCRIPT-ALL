// ARRAY METHOD PART 1

// 1) push(), 2) pop(), 3) shift(), 4) unshift(), 5) concat(), 6) indexOf(), 7) includes(), 8) reverse(), 9) sort(), 10) slice(), 11) splice() 


// SHIFT METHOD  shift()    // MODIFY THE ORIGINAL ARRAY ----------->>>>>>>>>>

const evenNumbers = [ 2, 4, 6, 8, 10];

evenNumbers.shift(); // delete the 1st element from array

// js engine have to work more (more load) in SHIFT method rather than POP method coz in SHIFT method it will shift all the index values from last to first

console.log(evenNumbers);   // O/P = [4, 6, 8, 10]


// UNSHIFT METHOD unshift()   // MODIFY THE ORIGINAL ARRAY ------------>>>>>>>>>>>>>>

const evenNumbers2 = [ 4, 6, 8, 10];

evenNumbers2.unshift(2);    // added 2 in 1st element (0th index)

console.log(evenNumbers2);   // O/P = [2, 4, 6, 8, 10]


// CONCAT METHOD concat() // Do Not MODIFY THE ORIGINAL ARRAY, CREATE A NEW ARRAY ------------>>>>>>>>>>>>>>


const vowels = ["A", "E", "I", "O", "U"];


const mergedArr1 = vowels.concat(evenNumbers2);  // Marge both the arrays 

console.log(mergedArr1);  
// O/P = ['A', 'E', 'I', 'O', 'U', 2, 4, 6, 8, 10]


const mergedArr2 = evenNumbers2.concat(vowels);

console.log(mergedArr2);



// ---------- indexOf() ---------- DO NOT MODIFY THE original ARRAY ------->>>>>>


// console.log(evenNumbers2);   // O/P = [2, 4, 6, 8, 10]

console.log( evenNumbers2[3] );  // O/P = 8

console.log( evenNumbers2.indexOf(3) ); // O/P = -1  coz 3 is not present in evenNumber2 array

console.log( evenNumbers2.indexOf(6) );  // O/P =  2 



// ---------- includes() ---------- DO NOT MODIFY THE original ARRAY ------->>>>>>


// const vowels = ["A", "E", "I", "O", "U"];

console.log( vowels.includes("I") );   // O/P = true
console.log( vowels.includes("Q") );   // o/p = false



// ---- reverse() -------// MODIFY THE original ARRAY ------->>>>>>


console.log( vowels.reverse() );  // O/P = ['U', 'O', 'I', 'E', 'A']


// ---- sort() ---------// MODIFY THE original ARRAY ------->>>>>>


// Alphabetically sort the array 

// vowels = ['U', 'O', 'I', 'E', 'A']

console.log( vowels.sort() );  // O/P = ['A', 'E', 'I', 'O', 'U']


const evenNumber3 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

// console.log( evenNumber3.sort() );
// O/P = [0, 10, 12, 14, 16, 18, 2, 20, 22, 24, 4, 6, 8]



// ---- slice() -----// DO NOT MODIFY THE original ARRAY, CREATE A NEW ARRAY------->>>>>>


// vowels = ['A', 'E', 'I', 'O', 'U'];

console.log( vowels.slice() );  // o/p = ['A', 'E', 'I', 'O', 'U']

console.log( vowels.slice(3) );  // o/p = ['O', 'U']

console.log( vowels.slice(2,4) );  // o/p = ['I', 'O'] 4th index will not print



// ---- splice() ----------// MODIFY THE original ARRAY ------->>>>>>


// vowels = ['A', 'E', 'I', 'O', 'U'];

console.log( vowels.splice() );  // O/P = []   (giving empty array)


// const evenNumber3 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

// If we  want to delete  only 4 then we have to pass index of 4 and we r removing only one value so have pass 1 also

console.log( evenNumber3.splice(2, 1));   // O/P = 4   remove 4 from array

console.log(evenNumber3);  // O/p = [0, 2, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

// if we want to remove 4 numbers from 8 then we have to write ---->>>>

console.log( evenNumber3.splice(3, 4) );   // O/p = [8, 10, 12, 14]

// so the final Array will be ==

console.log(evenNumber3);   // O/P = [0, 2, 6, 16, 18, 20, 22, 24]



// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>.

// IF WE WANT TO UPDATE MORE THAN ONE VALUE IN THE MIDDLE OF THE ARRAY----->>>>>>>>>>>   MODIFY THE original ARRAY ------->>>>>>

const normalArr = [4, 5, 6, 7, 8];

// Adding  11,9   values to the array from 5 / after 4  (index 0)

// here (1, 2,    11 ,9) means from index 1 , (11 and 9) will add from index 1  and here 2 represents from index 1 means from 5 how many values will remove in this case ( 5 and 6 will remove). 

normalArr.splice(1, 2,     11, 9);

console.log(normalArr);   // o/p =  [4, 11, 9, 7, 8]



