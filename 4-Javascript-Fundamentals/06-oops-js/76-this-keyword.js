/// this keyword in js

// important note on arrow function

// arrow func do not have their own bindings to this, arguments, or super.
// arrow function should not be used as method.

// //

// this for normal function

// the object which calls the (hi) function. this keyword points to that object. means window object

// function hi () {
//     console.log(this);  // points to window
// }
// hi();

// this for objects ---------->>>

const user = {
  firstName: "Subham",
  lastName: "Pal",
  fullName() {
    // method
    console.log(this); // this points user object

    function getAge() {
      console.log(this); // this points window object
    }
    getAge();
  },
};

user.fullName();

console.log("---------------->>>>>>>>>>>>>>>");

const user2 = {
  firstName: "Rahul",
  lastName: "Roy",
  tags: ["a", "b", "c"],

  printTags() {
    console.log(this.tags); //  ['a', 'b', 'c']

    this.tags.forEach(function (tag) {
      // console.log(tag);
      console.log(this); // now points to user2 obj
    }, this);
    // here passing this as a 2nd argument, we can control console.log(this) to points the user2 object. or else it points to window obj
  },
};

user2.printTags();

// this for event listeners ----->>>>>

const h1 = document.querySelector("h1");

h1.addEventListener("click", function (e) {
  console.log(this); // points to h1 element
});

const body = document.querySelector("body");

body.addEventListener("click", function () {
  // here if we use arrow func then this points to window object
  console.log(this); // points to body
});

//

//  this for arrow functions
console.log("-------------->>>>>>>>>>>>>>");

const user3 = {
  firstName: "Hira",
  lastName: "Lal",
  fullName: () => {
    //method
    // return this.firstName+" "+this.lastName;
    console.log(this); // in case of an arrow function this points to window object
  },
};

user3.fullName();

console.log("----------------->>>>>>>>>>>>");

// this for class
class User {
  constructor() {
    (this.name = "Subham Pal"), console.log(this); // points to returned (User)object
  }

  getUser() {
    console.log(this); // points to returned (User)object
  }
}

const userX = new User();
console.log(userX.getUser());

