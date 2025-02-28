
//  Async Await in js

// to use await without async function, we have to convert out js file type to "module" type


async function makeRequest() {
    const response = await fetch("https://reqres.in/api/users?delay=2");
    
    const data = await response.json();
    console.log(data.data[0]);
    
    // throw new Error("Error messages!!"); // new Error() is used to create a new error object and The Error constructor can take an optional message parameter.
    console.log("hello");

    return data;
};

makeRequest().then((data) => {
    console.log(data.data[0])
}).catch((err) => {
    console.log(err);    // to catch the error without try-catch block
});

