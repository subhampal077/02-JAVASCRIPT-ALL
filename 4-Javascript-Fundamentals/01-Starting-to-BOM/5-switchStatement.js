// const dayNumber = 3

// if (dayNumber === 0) {
//     console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//     console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//     console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//     console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//     console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//     console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//     console.log('It is Saturday Today')
// } else {
//     console.log('Please Enter a Valid Day Number')
// }


// ------- SWITCH CASE ----------

const dayNumber = 1;
// debugger
switch (dayNumber) {
    case 0:
        console.log("Its sunday");
        break;
    case 1:
        console.log("Its monday");
        break;
    case 2:
        console.log("Its tuesday");
        break;
    case 3:
        console.log("Its wednesday");
        break;
    case 4:
        console.log("Its thursday");
        break;
    case 5:
        console.log("Its friday");
        break;
    case 6:
        console.log("Its saturday");
        break;
    default:
        console.log("Please enter a valid no");
}


// ----------------------------------------


// if (age2 >= 18 && age2 <= 24) {
//     console.log(`${userName2} is a clg student`);

//     if (age2 < 20) {
//         console.log(" age below 20");
//     }
//     else {
//         console.log(" age above 20 ");
//     }
// }

// else if (age2 > 24 && age2 < 60) {
//     console.log(`${userName2} is a working professional`);
// }

// else {
//     console.log(`${userName2} is not a student and not working also`);
// }


// NESTING IS NOT SUPPORTED IN SWITCH STATEMENT 

const userName2 = "Subham";
const age2 = 70;

switch(true) {

    case (age2 >= 18 && age2 <= 24) :
        console.log(`${userName2} ${age2} is a clg student`);
        break;

    case age2 > 24 && age2 < 60 :
        console.log(`${userName2} ${age2} is a working professional`);
        break;

    default:
        console.log(`${userName2} ${age2} is not a clg student and not working also`);

}


