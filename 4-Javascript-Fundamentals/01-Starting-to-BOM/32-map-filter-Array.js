
// Map, Filter, Reduce in JavaScript |


// MAP =  result value = A new array with each element being the result of the callback function.

const fruits = ["Mango", "Orange", "BaNaNa", "Apple", "Guava"];

const capitalFruits = fruits.map((element, i, array) => {
    console.log(i + 1, element);
    // console.log(array);    // O/P = ['Mango', 'Orange', 'Banana', 'Apple', 'Guava']
    return element.toUpperCase();   // Returns a new array
});

console.log(capitalFruits);


// ----------------------------------------------------------------


// Filter //


const filterFruits = fruits.filter((element, index, arr) => {
    console.log(index, element);

    return element.toUpperCase();   // its a truthy value so it'll return the same array

    // return false ;    // O/P = []  // empty array coz falsy value
});

console.log(filterFruits);  // ['Mango', 'Orange', 'Banana', 'Apple', 'Guava']   // NOTHING CHANGES



const largeFruits = fruits.filter((element, i, arr) => {
    console.log(element.length > 5);   // false tru tru false false

    // return(element.length > 5);   // ['Orange', 'Banana']   // both have more than 5 characters

    // return element.includes("n");  // ['Mango', 'Orange']

    return element.toLowerCase().includes("n");  // ['Mango', 'Orange', 'BaNaNa']
});

console.log(largeFruits);  //  


// ---------------------------------------------------

const student = [
    {
        name: "Rohan",
        age: 22,
    },
    {
        name: "Subham",
        age: 25,
    },
    {
        name: "Prabhu",
        age: 17,
    },
    {
        name: "Duggu",
        age: 18,
    },
];

const adultStudent = student.filter((element, index, arr) => {
    console.log(element.age >= 18);   // true / true/ false/ true

    return element.age >= 18;
});

console.log(adultStudent);  // [{…}, {…}, {…}]


const nameAdultStudent = adultStudent.map((element) => {
    return element.name;
});

console.log(nameAdultStudent);  // ['Rohan', 'Subham', 'Duggu']


// shortcut method (Direct way to get adult student name)
// CHAINING OF ARRAY METHOD

const adultStudentName = student.filter((element) => {
    return element.age > 18;
}).map((element) => {
    return element.name;
});

console.log(adultStudentName);  // ['Rohan', 'Subham']
   // name of students above 18 direct way.


