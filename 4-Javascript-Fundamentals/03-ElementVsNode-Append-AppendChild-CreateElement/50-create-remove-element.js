
// creating elements as per the requirement for generating 100 images 


const container = document.querySelector(".container");


for (let i = 1; i <= 50; i++) {

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("imageContainer");

    const image = document.createElement("img");
    image.classList.add("my-img");
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;


    const para = document.createElement("p");
    para.innerText = i;

    imageContainer.append(image, para);
    container.append(imageContainer);

}

// //

// Remove Permanently Element from Web page using JS //


// deleting 5th element ( using remove -->> latest method)

const fifthImage = document.querySelector("body > div > div:nth-child(5)");   // ( using copy js path )

fifthImage.remove();  // deleted permanently



// using OLD removeChild method  // have to select parent element then delete 

// here parent of imageContainer is container

//removing 1st imageContainer (copy path using js)

const firstImageContainer = document.querySelector("body > div > div:nth-child(1)");

container.removeChild(firstImageContainer);  // permanently deleted


// ended //


// if we want to remove container permanently then we have to use  -->>>

let container2 = document.querySelector(".container");

// container2.remove();  // container removed 

container2 = null;  // memory also deleted 