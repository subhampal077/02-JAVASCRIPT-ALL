
// fixing CallBack Hell using promise with XMLHttpRequest

function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener("load", () => {
            resolve(xhr.response);
        });

        xhr.addEventListener("error", () => {
            reject("Request Failed!!!");
        });

    });

    xhr.open(method, url);
    xhr.send();

    return promise;
};

makeHttpRequest("GET", "https://dummyjson.com/users").then((usersData) => {
    console.log(usersData.users[0].id);
    return makeHttpRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[0].id}`);
}).then((postData) => {
    console.log(postData.posts[0].id);
    return makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postData.posts[0].id}`);
}).then((commentsData) => {
    console.log(commentsData.comments[1].body);
}).catch((err) => {
    console.log(err);
});



// fixing CallBack Hell using promise with FETCH API

fetch("https://dummyjson.com/users").then((res) => {
    return res.json();
}).then((usersData) => {
    // console.log(usersData.users[0].id);
    return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`)
}).then((res) => {
    return res.json();
}).then((postData) => {
    // console.log(postData.posts[0].id);
    return fetch(`https://dummyjson.com/comments/post/${postData.posts[0].id}`);
}).then((res) => {
    return res.json();
}).then((commentsData) => {
    console.log(commentsData.comments[1].body);
}).catch((err) => {
    console.log(err);
});




// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//     console.log(usersData.users[0].id);  // got the main id as an o/p
//     makeHttpRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postData) => {
//         console.log(postData.posts[0].id);   // got the post id of the user from his main id
//         makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentsData) => {
//             console.log(commentsData.comments[0].body);  // Get all comments by post id
//         });
//     });
// });

