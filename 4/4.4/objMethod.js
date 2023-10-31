"use strict";
let user2 = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
};

/*let admin = user2;
user2 = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
//If we used this.name instead of user.name inside the alert, then the code would work.*/

user2.sayHi(); // John

let user = {
    name: "John",
    age: 30
};
  
user.sayHi = function() {
    alert("Hii!");
};
  
user.sayHi(); // Hii!

// first, declare
function sayHello() {
    alert("Hello!");
}
  
// then add as a method
user.sayHello = sayHello;
  
user.sayHello(); // Hello!

function sayHi() {
    alert(this);
}
  
sayHi(); // undefined

let user3 = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
};
  
user3.sayHi(); // John

let user5 = { name: "John" };
let admin2 = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user5.f = sayHi;
admin2.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user5.f(); // John  (this == user)
admin2.f(); // Admin  (this == admin)

admin2['f'](); // Admin (dot or square brackets access the method – doesn't matter)