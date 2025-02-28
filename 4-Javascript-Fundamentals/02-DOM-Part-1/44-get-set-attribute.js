
// getAttribute and setAttribute in javascript


//   GET ATTRIBUTE

// selecting custom attribute from html using querySelector

const customAttribute1 = document.querySelector("[ignite]");   // will select the 1st h2 element
console.log(customAttribute1);


const customAttribute2 = document.querySelector("[ignite='subham']");
console.log(customAttribute2);


// find the value of 1st attribute ignite
const firstAttributeVal = document.querySelector("[ignite]").attributes.ignite.value;

console.log(firstAttributeVal);   // ninja

// 2nd attribute val
// const secondAttributeVal = document.querySelectorAll("[ignite]")[1].attributes.ignite.value;

const secondAttributeVal = document.querySelector("[ignite = 'subham']").attributes.ignite.value;

console.log(secondAttributeVal);   // subham


// another way to get / access attribute
console.log(
    document.querySelector("[ignite = 'subham']").getAttribute("ignite")
);    // ninja

// same way we can access class attribute also
console.log(
    document.querySelector("h1").getAttribute("class")
);



//   SET ATTRIBUTE


// set another attribute (title) in 1st h1 element
document.querySelector("h1").setAttribute("title", "titleAttributeValue");

// set id attribute in 1st h1 element
document.querySelector("h1").setAttribute("id", "hello");

//another way to set id ( we can access some attributes directly like -> id, title, className etc)
document.querySelector("h1").id = "header";

document.querySelector("h1").className = "h1-class";


/// Ended ///