// ProtoType Inheritance in js

class Person {
  live() {
    console.log("living");
  }
}

class User extends Person {
  constructor(fname, lname, age) {
    super();
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(value) {
    const splittedVal = value.split(" ");
    this.firstName = splittedVal[0];
    this.lastName = splittedVal[1];
  }
}
const user = new User("Subham", "Pal", 25);
console.log(user);

class Student extends User {
  constructor(firstName, lastName, age, standard) {
    super(firstName, lastName, age);
    this.standard = standard;
  }
  study() {
    console.log("studying.....");
  } // method
}
const student = new Student("Rahul", "Roy", 17, "class11");
console.log(student);

class Employee extends User {
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age);
    this.company = company;
  }
  work() {
    console.log("Working");
  }
}

const student1 = new Student("Anupam", "Jain", 32, "BCA");
const employee1 = new Employee("Suman", "Paul", 72, "Google");
