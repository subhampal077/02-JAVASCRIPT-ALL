
// DOM ( DOCUMENT OBJECT MODEL )


// html parser is a component/engine that converts every html element in an object, on the browser, that can be easily manipulated and processed by a computer. 
// This structured format is typically a Document Object Model (DOM) tree.


document.body.children[0].innerHTML = "Subham";

document.body.children[0].innerHTML = "<i>Subham</i>";   // can modify the html but can not do it using innerText.

document.body.children[0].innerText = "Subham P";


document.children[2].src = "https://image-address.com";
