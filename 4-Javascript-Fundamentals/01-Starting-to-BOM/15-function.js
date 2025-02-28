// FUNCTION IN JS


// function defination


// Here No Name is default Val if we not pass any parameter when calling the function 

// function myDetails(lol = "No Name")    // ES6 style

function myDetails(lol, param2) {

    if(!param2) {
        param2 = "Dont know now";   // Passing default val as OLD STYLE (before ES6)
    }

    console.log(`I am ${lol || "No Name"}`);   // Using OR operator we also can pass the default val.

    console.log("Currently I am learning");

    console.log(`I am gonna be a great ${param2}`);


    return "ok";

};

// -----------------function call
// const returnValue = myDetails();    // O/P of returnValue = "ok"


//(when we call function we pass argument  and when define function we pass parameter)

// passing argument

myDetails("Subham Paul", "Engineer");
console.log("--------------------------------------");

myDetails("Suman P", "MR");
console.log("---------------------------------------");

myDetails("Rohan D", "BuisnessMan");
console.log("---------------------------------------");

myDetails();   // O/P = undefined

