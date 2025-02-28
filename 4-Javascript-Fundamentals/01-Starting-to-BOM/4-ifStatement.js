// const userName = prompt("Please Enter your name");
// const age = parseInt(prompt("Enter age"));

// console.log(`Name = ${userName} and Age = ${age}`);

// if (age >= 18 && age <= 24) {
//     console.log(`${userName} is a clg student`);
// }


// -------------- EXERCISE -------------------


// If user doesnot enter any value set defaulf value ( subham and 22 ) with the help of logical operator  (OR)


// const userName2 = prompt("Please Enter your name") || "Subham";
// const age2 = parseInt(prompt("Enter age")) || "22";

// console.log(`Name = ${userName2} and Age = ${age2}`);

// if (age2 >= 18 && age2 <= 24) {
//     console.log(`${userName2} is a clg student`);
// }


// ------- USING IF ELSE ------

// let userName2 = prompt("Please Enter your name");
// let age2 = parseInt(prompt("Enter age"));



// if(!userName2) {
//     console.log(`Name = "Unknown man "`);
// }

// if(!age2) {
//     console.log(`Age = 22`);
// }




// if(userName2) {
//     console.log(`Name = ${userName2}`);
// }

// if(age2) {
//     console.log(`Age = ${age2}`);
// }


// if (age2 >= 18 && age2 <= 24) {
//     console.log(`${userName2} is a clg student`);
// }

// else if ( age2 > 24 && age2 < 60) {
//     console.log(`${userName2} is a working professional`);
// }

// else {
//     console.log(`${userName2} is not a student and not working also`);
// }


// -------------- NASTED IF / ELSE ---------------


let userName2 = prompt("Please Enter your name");
let age2 = parseInt(prompt("Enter age"));

if(userName2) {
    console.log(`Name = ${userName2}`);
}

if(age2) {
    console.log(`Age = ${age2}`);
}

debugger

// NASTED IF / ELSE 

if (age2 >= 18 && age2 <= 24) {
    console.log(`${userName2} is a clg student`);

    if( age2 < 20 ) {
        console.log(" age below 20");
    }
    else {
        console.log(" age above 20 ")
    }
}

else if ( age2 > 24 && age2 < 60) {
    console.log(`${userName2} is a working professional`);
}

else {
    console.log(`${userName2} is not a student and not working also`);
}
