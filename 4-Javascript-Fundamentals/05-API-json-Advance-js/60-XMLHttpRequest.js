

// NOW A DAYS WE USE FETCH REQUEST BEFORE 2016 WE HAD TO USE XMLHttpRequest()


const image = document.querySelector("img");
const generateImage = document.querySelector("button");

generateImage.addEventListener("click", (e) => {

    // fetch('https://dog.ceo/api/breeds/image/random')
    //     .then(response => response.json())
    //     .then((json) => {
    //         console.log(json);
    //         image.src = json.message;
    //     });


    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.responseType = "json";   // to make response type json


    xhr.addEventListener("load", () => {
        console.log(xhr);
        image.src = xhr.response.message;

        // console.log(JSON.parse(xhr.response).message);
        // image.src = JSON.parse(xhr.response).message;
    });


// Another way instead of using load event listener

    // xhr.onload = () => {
    //     console.log(xhr);
    //     image.src = xhr.response.message;
    // };

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();

});
