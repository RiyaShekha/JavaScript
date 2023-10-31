"use strict";

let user = {}; // a user without "address" property
alert(user.address); // Undefined
alert(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
alert(user.address ? user.address.street : undefined); //using conditional operator.It works, there’s no error. But it’s quite inelegant. As you can see, the "user.address" appears twice in the code.
alert( user.address && user.address.street && user.address.street.name ); // undefined, usging ANDing in the code above, user.address appears three times.
//That’s why the optional chaining ?. was added to the language. To solve this problem once and for all!

//The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
alert( user?.address?.street ); // undefined 

let user2 = null;
alert( user2?.address ); // undefined
alert( user2?.address.street ); // undefined

//user3?.address; // ReferenceError: user is not defined

//The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.
//?.() is used to call a function that may not exist.
let userAdmin = {
    admin() {
      alert("I am admin");
    }
};
  
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user3 = null;

alert( user1?.[key] ); // John
alert( user3?.[key] ); // undefined

//delete user?.name; // delete user.name if user exists

/*
//We can use ?. for safe reading and deleting, but not writing
let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John" 
*/
