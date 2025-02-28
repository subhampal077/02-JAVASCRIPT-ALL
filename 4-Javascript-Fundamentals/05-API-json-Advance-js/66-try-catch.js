

// Try Catch Block in js


// let a;

// try {
//     console.log(a);
// } catch(err) {
//     console.dir(err);  // object
//     console.log(err.name);  //  ReferenceError
//     console.log(err.message);  //  a is not defined
// } finally {
//     console.log("finally run in every case");
// }

// console.log("Hiiii");


// previous async await code

async function makeRequest() {

    try {
        const response = await fetch("https://reqres.in/api/users?delay=2");

        const data = await response.json();
        console.log(data.data[0]);
        return data;

    } catch (err) {
        console.log(err);  // o/p = Error messages!!!
        console.log("Hello World!");
    }
};

makeRequest();
