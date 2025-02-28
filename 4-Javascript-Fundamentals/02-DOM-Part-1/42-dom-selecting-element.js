
// DOM - SELECTING ELEMENT IN JAVASCRIPT

const h1Text = document.getElementsByTagName("h1")[0].innerText = "Frontend Development Course";    // returns HTMLCollection


const allImages1 = document.getElementsByTagName("imgg")[0];

const allImages2 = document.images[0];


const cssImg = document.getElementsByClassName("class name");
const cssImg2 = document.getElementsByClassName("class name")[0];


// Id is always unique
const selectedId = document.getElementById("Id name");



// query selector  

// here we can pass anything like TagName, className, id, selectors etc.

// querySelector select only one element which appears first.  but 

// querySelectorAll can select multiple elements matches by their name.


// document.querySelector(" #id-name/ .class-name/ tag-name");

document.querySelectorAll(".class-name");    // returns NodeList

//select using alt attribute
document.querySelectorAll('[alt="javascript-image"]');  // it will select all the element who's alt attribute name is "js-image" .

document.querySelector("ul li");    // select the 1st li of UL.

const firstUL = document.querySelector("ul");
const allLI = firstUL.querySelectorAll("li");

// taking all the image link in an array.
const imagesUrl = [
    "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8fDB8fHww" ,
    "https://images.unsplash.com/photo-1535868118629-f37bcd69ff59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1571250506538-55063498b11e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHxzcGxhc2h8ZW58MHx8MHx8fDA%3D"
];

// selecting all the images using js query selectorAll
const allImages = document.querySelectorAll("img");  // return nodeList

// applying forEach array method to the nodeList  
// using forEach pass all the image url to the image elements.
allImages.forEach( (image, index)=> {
    return image.src = imagesUrl[index];
} );

// allImages[0].src = "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8fDB8fHww";


// ended//