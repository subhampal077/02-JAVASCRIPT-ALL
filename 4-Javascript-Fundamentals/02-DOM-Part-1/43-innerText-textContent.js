
// DIFFERENCE BETWEEN innerText , innerHtml , textContent

const firstPara = document.querySelector("p");

console.log(firstPara.innerHTML)
// O/p =  <b style="display: none;">      Frontend      development      </b> is the development of the
//         <a href="https://en.wikipedia.org/wiki/Graphical_user_interface" target="_blank" title="Graphical user interface">graphical user interface</a>


console.log(firstPara.innerText);    // not able to console the css display: none; elements.  and visibility: hidden; elements.
// O/p = "is the development of the graphical user interface of a website",


console.log(firstPara.textContent)
// O/P =               Frontend      development       is the development of the
// graphical user interface
// of a website, through the use of
// HTML,
// CSS, and
