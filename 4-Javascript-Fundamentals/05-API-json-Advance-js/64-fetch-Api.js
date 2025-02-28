
// Javascript Fetch API

// fetch("https://dummyjson.com/products").then((res) => {
//     res.json().then((data) => {
//         console.log(data.products[0])
//     });  // with the help of nesting .then
// });


// without nesting
fetch("https://dummyjson.com/products").then((res) => {
    return res.json();
}).then((data) => {
    console.log(data.products[0]);
}).catch((err) => {
    console.log(err);
});


// post request using fetch api

fetch('https://dummyjson.com/products/add', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify({
        title: 'BMW Pencil',
        category: "stationary",
        price: 2
        /* other product data */
    })
}).then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


// end //