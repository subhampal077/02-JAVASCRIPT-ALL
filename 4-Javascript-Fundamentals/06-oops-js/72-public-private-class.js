// Private Public class in js

// we can not invoke class without new keyword.

class CreateUser {
  #age;
  constructor(fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.#age = age; // private property
  }

  #address = "kolkata"; // private property

  address2 = "Cob"; // public property

  getYob() {
    console.log(this.#address);
    console.log(this.#fullName());

    return new Date().getFullYear() - this.#age;
  }

  #fullName() {
    return this.firstName + " " + this.lastName;
  } // private property
}

const user1 = new CreateUser("Subham", "Pal", 25);
console.log(user1);
