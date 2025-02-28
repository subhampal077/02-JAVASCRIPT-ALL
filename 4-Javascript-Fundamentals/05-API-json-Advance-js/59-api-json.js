

// const userData = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };


// get request via js

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then((json) => {
//         console.log(json)
//     });


// // post request via js

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



// ---------------------------------------------------------------

const image = document.querySelector("img");
const generateImage = document.querySelector("button");

generateImage.addEventListener("click", (e) => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            image.src = json.message;
        });
});
