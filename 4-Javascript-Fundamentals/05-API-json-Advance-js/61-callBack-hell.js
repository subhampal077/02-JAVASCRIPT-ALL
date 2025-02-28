

// const xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.responseType = "json";

// xhr.addEventListener("load", () => {
//     console.log(xhr.response.users[1].id);
// });

// xhr.open("GET", "https://dummyjson.com/users");
// xhr.send();



function makeHttpRequest(method, url, callBack) {

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        // console.log(xhr.response);
        callBack(xhr.response);
    });

    xhr.open(method, url);
    // xhr.open("GET", "https://dummyjson.com/users");
    xhr.send();
};

// THIS IS HOW CALLBACK HELL CREATED  -- >> 

makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
    console.log(usersData.users[0].id);  // got the main id as an o/p

    makeHttpRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postData) => {
        console.log(postData.posts[0].id);   // got the post id of the user from his main id

        makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentsData) => {
            console.log(commentsData.comments[0]);  // Get all comments by post id
        });

    });

});

