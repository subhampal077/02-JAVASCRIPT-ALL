// Static properties and methods on classes

class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static hi = "hey world"; // static property, // only can accessed by the class (CreateUser)

  // static block / `this` inside the static block points to the class (CreateUser)
  static {
    this.address = "Cob"; // added to class
  }

  static {
    console.log("Static block runs automatic/without calling");
  }

  static getFullName() {
    return this.firstName + " " + this.lastName;
  }

  birthYear() {
    return new Date().getFullYear() - this.age;
  }
}

const user1 = new CreateUser("Subham", "Pal", 25);
console.log(user1, user1.birthYear());

console.log(CreateUser.hi, "  ", CreateUser.address);

console.log(CreateUser.getFullName()); // "undefined undefined"  // coz firstName, lastName values r situated in object, not in the class.
