// Procedural Programming in JavaScript
const user = {
  firstName: "Subham",
  lastName: "Pal",
  age: 25,
};

function yearOfBirth(age) {
  console.log(new Date().getFullYear() - age);
}

yearOfBirth(user.age);

// OOP (Object-Oriented Programming) in JavaScript
const user2 = {
  firstName: "Subham",
  lastName: "Pal",
  age: 45,
  yob: function () {
    return new Date().getFullYear() - user2.age;
  },
};

console.log(user2.yob());

// In JavaScript, a factory function is a function that creates and returns an object. It's an alternative to using classes or constructor functions to create objects.

function newUser(fname, lname, age) {
  const user = {
    firstName: fname,
    lastName: lname,
    age,
    yob: function () {
      return new Date().getFullYear() - age;
    },
  };

  return user;
}

const userA = newUser("subh", "pal", 25);
const userB = newUser("suman", "pal", 31);

console.log(userA.yob === userB.yob); // false
