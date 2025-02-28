//  APPLY STYLES TO THE ELEMENTS USING JAVASCRIPT DOM

// adding red color to 1st h1 element
// document.querySelector("[class='css-image']").style.color = "red";

const hTagStyle = document.querySelector("[class='css-image']").style;

hTagStyle.color = "hotpink";
hTagStyle.backgroundColor = "pink";

// change the bgc of all a tags
const allAtags = document.querySelectorAll("a");

allAtags.forEach((element) => {
  // element.style.backgroundColor = "wheat";
  // element.style.color = "teal";
  // element.style.fontSize = "14px";
  // element.style.fontWeight = "700";

  // shortcut method ---->>>>>
  // element.style.cssText = `
  // color: teal;
  // background-color: wheat;
  // font-size: 16px;
  // font-weight: 700;
  // `

  // best method is put the styles in css file using class attribute then using js DOM manipulation add that class in HTML element
  // adding aTagStyle class in html ----->>>>>>

  // element.className = "aTagStyle wavy-link";
  // element.className = "wavy-link";

  // or other way ===>>>

  // element.setAttribute("class", "aTagStyle")    // set a new class attribute

  //best class adding way ---->>>

  element.classList.add("aTagStyle"); // aTagStyle class added with existing classes.
});

//  NOTE BEST WAY TO ADD CLASS in JS DOM ==> 
// this class will add with existing classes

// document.querySelector("a").classList.add("aTagStyle");

// document.querySelector("a").classList.remove("aTagStyle");

// document.querySelector("a").classList.toggle("aTagStyle");
// if aTagStyle class is not present then toggle will add the class, and if aTagStyle class is already present then toggle will remove that class.

////  ENDED   ////
