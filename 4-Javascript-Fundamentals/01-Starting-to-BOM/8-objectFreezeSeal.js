
// OBJECT FREEZE AND OBJECT SEAL

let user = {
    firstName : "Subham",
    lastName : "Pal",
    age : 25,
}

user.city = "Cob";

// delete user.lastName;  // Delete any key/property form object

// user = {
    
// }

// console.log(user);

let userName = "Shubh";

//  userName = "Roy";

// ------------------------------------------



//IF WE DO NOT WANT TO  DELETE / ADD ANY VALUE OF AN OBJECT  we have to use Object.seal()


Object.seal(user);

delete user.lastName;  // It will not delete coz we used Object.seal();

user.mobileNo = 1234567890;    // It will not add coz we used Object.seal();

// But we can UPDATE THE EXISTING VALUE of the object while using SEAL  

user.firstName = "Rohan";   // firstName will update from Subham to Rohan


// --------------------------------------------------------------------


//IF WE DO NOT WANT TO  DELETE / ADD / (UPDATE existing val)  ANY VALUE OF AN OBJECT  we have to use Object.freeze()

Object.freeze(user);

user.firstName = "Rohan";   // firstName will NOT update 

console.log(user);

// IN KEYWORD 
//with the help of IN we can know that the KEY is present or not in the OBJECT 

console.log("mobileNo" in user);    // O/P = False
console.log("lastName" in user);    // O/P = true


