
// Copying using appendCHild // in this case we have at least one Img tag

const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const firstImage = document.querySelector("img");


// print 1st 20 images from image src link 

// for(let i = 2; i <=100; i++) {
//     const cloneImage = firstImage.cloneNode();
//     container.appendChild(cloneImage).attributes.src.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
// }

for(let i = 2; i <=20; i++) {
    const cloneImage = firstImage.cloneNode();
    cloneImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    container.appendChild(cloneImage);
};



// CREATING NEW ELEMENTS IN JAVASCRIPT 

// creating paragraph element

const paragraph = document.createElement("p");

paragraph.innerText = "This is a para created using document.createElement";

//adding className and id to paragraph
paragraph.classList.add("my-para");
paragraph.id = "my-para";

container.appendChild(paragraph);


// CREATING image ELEMENT IN JAVASCRIPT // we do not have any img tag // we have to create ..   image from 21 - 40


for(let i=21; i<=40; i++) {

    const secondImage = document.createElement("img");  // creating new img element 

    secondImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;   // adding src value to it  and updating the val using loop (i)

    container.append(secondImage);

}