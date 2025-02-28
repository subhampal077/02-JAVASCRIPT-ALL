
//  Access Parent Sibling & Children Element  //


const firstAlink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)");

// Access parent element

console.log(firstAlink.parentElement.parentElement);

console.log(firstAlink.parentElement.parentNode);



// Access child element

// every children is a childNode but every childNode is not children..
// childNodes = all children + extra text

console.log(firstAlink.parentElement.parentElement.children);

console.log(firstAlink.parentElement.parentElement.childNodes);


// Access siblings elements

console.log(firstAlink.nextElementSibling.nextElementSibling.nextElementSibling);   // <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>   // give o/p as element


console.log(firstAlink.previousElementSibling);   // <b style="display: none;"> Frontend development </b>   // give o/p as element


console.log(firstAlink.previousSibling);  //  is the development of the   // give o/p as node

console.log(firstAlink.nextSibling);  // of a website, through the use of   //  give o/p as node

// ended //
