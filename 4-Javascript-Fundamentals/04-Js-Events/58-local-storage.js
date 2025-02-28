
// Local Storage in Javascript //

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");

const myName = document.querySelector(".my-name");
const myAge = document.querySelector(".my-age");

// Storing STRING


// myName.innerText = localStorage.userName;

// nameInput.addEventListener("input", (e) => {
//     localStorage.userName = e.target.value;
//     // localStorage.setItem("userName", e.target.value);
//     myName.innerText = e.target.value;
// });


// myAge.innerText = localStorage.getItem("userAge");

// ageInput.addEventListener("input", (e) => {
//     // localStorage.userAge = e.target.value;
//     localStorage.setItem("userAge", e.target.value);
//     myAge.innerText = e.target.value;
// });



// Storing OBJECT /////////


const myData = JSON.parse(localStorage.getItem("userData")) || {
    userName: "",
    userAge: ""
};

myName.innerText = myData.userName;

nameInput.addEventListener("input", (e) => {
    myName.innerText = e.target.value;
    myData.userName = e.target.value;
    localStorage.setItem("userData", JSON.stringify(myData));
});


myAge.innerText = myData.userAge; 

ageInput.addEventListener("input", (e) => {
    myAge.innerText = e.target.value;
    myData.userAge = e.target.value;
    localStorage.setItem("userData", JSON.stringify(myData));
});


// clear total/All local storage
// localStorage.clear();   // clearAll at once


// remove particular item
// localStorage.removeItem("userData");    // userData key value removed