

// ES6 ARRAY OBJECTS DESTRUCTURING //


//Array destructuring//

const color = ["red", "blue", 'yellow', 'orange', 'green', 'white'];

const [ a, b, c, , ,f ] = color;
console.log(a, b, c, f);


// Array destructuring like an objects based on index number//

const { 4: color5 } = color;
console.log(color5);



// OBJECT destructuring //

const user = {
    name: "subham",
    surname: "pal",
    age: 25,
    weight: "60kg",
    height: "5'5",
    address: {
        city: "coochbehar",
        pin: 736170,
        post: "Ghughumari"
    }
}

const { name, age, surname } = user;
console.log(age, surname, name);


const { weight: myWeight, height: myHeight } = user;
console.log(myHeight, myWeight);

const { address: {city} } = user;
console.log(city);

const { address: {pin: myPincode} } = user;
console.log(myPincode);


// ANOTHER LONG WAY //

const { address } = user;
const { post } = address;
console.log(post);



// DESTRUCTURING OF AN ARRAY IN A FUNCTION //

function printColor( [a,b, ,d, ...rest] ) {
    console.log(a,b,d, rest);
}

printColor(color);


// DESTRUCTURING OF OBJECT IN A FUNCTION
function print( {name} ) {
    console.log(name);
}

print(user);


// ENDED...