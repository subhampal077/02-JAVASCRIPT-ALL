// Getter and Setter in js

// implementing in class created Object
class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  birthYear() {
    return new Date().getFullYear() - this.age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(value) {
    const splitted = value.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1];
  }
}

const user1 = new CreateUser("Subham", "Pal", 25);
console.log(user1, user1.birthYear());

//

// Implementing in normal object
// const user = {
//     firstName: "Subham",
//     lastName: "Pal",
//     get fullName() {
//         return user.firstName+ " " +user.lastName;
//     },
//     set fullName(value) {
//         const splitted = value.split(" ")
//         console.log(splitted);
//         this.firstName = splitted[0];
//         this.lastName = splitted[1];
//     },
// };

// // user.fullName = "Rahul Roy";

// console.log(user);
