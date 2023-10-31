"use strict";

function User(name) {
    this.name = name;
    this.isAdmin = false;
}
  
let user = new User("Jack");
  
alert(user.name); // Jack
alert(user.isAdmin); // false

//Inside a function, we can check whether it was called with new or without it, using a special new.target property.
//It is undefined for regular calls and equals the function if called with new

function User2() {
    alert(new.target);
}
  
// without "new":
User2(); // undefined
  
// with "new":
new User2(); // function User { ... }

//constructors do not have a return statement.
//returning an object
function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
}
  
alert( new BigUser().name );  // Godzilla, got that object

//empty return
function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
  }
  
  alert( new SmallUser().name );  // John

// we can omit parentheses after new:
let user3 = new User; // <-- no parentheses
// same as
let user4 = new User();

//Methods in constructor
function User3(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
}
  
let john = new User("John");
  
john.sayHi(); // My name is: John
  
/*
john = {
    name: "John",
    sayHi: function() { ... }
}
*/