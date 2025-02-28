// a constructor is a special function used to create and initialize objects.

// When we define a class, the constructor method is a place where we can set up initial properties for an instance of that class.

// Classes in js

class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  birthYear() {
    return new Date().getFullYear() - this.age;
  }
}

const user1 = new CreateUser("Subham", "Pal", 25);
console.log(user1, user1.birthYear());

const user2 = new CreateUser("Rahul", "Roy", 24);
console.log(user2, user2.birthYear());

// ENDED
