

// optional chaining (`?.`)

const user1 = {
    name: "Paul",
    age: 25
};

console.log(user1.address);  // undefined

// console.log(user1.address.city);  // TypeError: Cannot read properties of undefined (reading 'city')


// this is called optional chaining.. here if user1.address exists then only go and check the value of pin, otherwise return user1.address value undefined.

console.log(user1.address?.pin)  // undefined


const user2 = {
    name: "Subham",
    title: "Pal",
    age: 25,
    address: {
        city: "coochbehar"
    },
    // getFullName: function() {
    //     return user2.name + " " + user2.title;
    // },
    getFullAddress: "Hello",
};

const a = "city";

console.log(user2.address?.[a]);   // coochbehar  // passing variable in bracket notation

// console.log(user2.getFullName()); //  Subham Pal

console.log(user2.getFullName?.());  // undefined if the function not present in user2 

//  here if user2.getFullName exists then only it calls the function and return the value subham pal, otherwise it returns the value of user2.getFullName = undefined


// console.log(user2.getFullAddress?.());  
// TypeError: user2.getFullAddress is not a function