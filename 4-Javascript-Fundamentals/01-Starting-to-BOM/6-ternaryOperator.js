
const gender = "F";

const userMsg = `${gender === "F" ? "She" : "He" } is a software engg `;
console.log(userMsg);

const userMsg2 = `${gender === "M" ? "She" : "He" } is a software engg too `;
console.log(userMsg2);


// ==============================


const result = "okey" ? "subham" : "pal" ? "truthy" : 100   // return Subham coz "okey" is a truthy val 
console.log(result);

const result1 = null ? "subham" : "pal" ? "truthy" : 100   // return truthy coz "pal" is a truthy val 
console.log(result1);

const result2 = null ? 'hey' : '' ? '12' : 0   // return 0 coz '' emplty string is a falsy value and null is a falsy value
console.log(result2);





