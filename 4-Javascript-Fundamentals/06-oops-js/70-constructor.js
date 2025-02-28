// normal using of function

// one function using multiple time ==> polymorphism

function getYob() {
  // return new Date().getFullYear() - user.age;
  return new Date().getFullYear() - this.age;
}

function createUser(fname, lname, age) {
  const user = {
    firstName: fname,
    lastName: lname,
    age: age,
    birthYear: getYob,

    // useOfThis: function () {
    //   console.log(this);
    // },
  };
  return user;
}

// // createUser without using prototype

function createUser(fname, lname, age) {
  const user = {
    firstName: fname,
    lastName: lname,
    age: age,
    birthYear: createUser.commonMethod.getYob,
  };
  return user;
}

//creating a key in function
createUser.commonMethod = {
  getYob: function () {
    return new Date().getFullYear() - this.age;
  },
};

const user1 = createUser("Subham", "Pal", 25);
console.log(user1, user1.birthYear());

const user2 = createUser("Rahul", "Roy", 20);
console.log(user2, user2.birthYear());

//

// Creating an object using prototype (constructor function) //

//(constructor function) ->  when we call a function with new keyword it always returns an object then that main function is called constructor function.

// when we create a constructor function the name of function starts with Capital letter for best practice.

function CreateUserX(fname, lname, age) {
  // console.log(this);
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
}

CreateUserX.prototype.getYob = function () {
  return new Date().getFullYear() - this.age;
};

CreateUserX.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

const userA = new CreateUserX("Subh", "Pal", 25);
console.log(userA, userA.getYob(), userA.fullName());

const userB = new CreateUserX("Rahul", "Roy", 20);
console.log(userB, userB.getYob());

// console.log(userA.getYob === userB.getYob) // true
