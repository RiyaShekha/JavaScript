"use strict";

let message = "Hello!";
let phrase = message; //Here we put a copy of message into phrase

let user = {
    name: "John"
};

let admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

//Comparison by Reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let c = {};
let d = {}; // two independent objects

alert( c == d ); // false

const user2 = {
    name: "John"
};
  
user2.name = "Pete"; // an object declared as const can be modified.
  
alert(user2.name); // Pete

//Cloning and Merging

let user3 = {
  name: "John",
  age: 30
};

let clone1 = Object.assign({}, user);

alert(clone1.name); // John
alert(clone1.age); // 30
  
let clone = {}; // the new empty object
  
// let's copy all user properties into it
for (let key in user3) {
  clone[key] = user3[key];
}
  
// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
  
alert( user3.name ); // still John in the original object

//Object assign
let user4 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user4, permissions1, permissions2);

// now user4 = { name: "John", canView: true, canEdit: true }
alert(user4.name); // John
alert(user4.canView); // true
alert(user4.canEdit); // true

Object.assign(user4, { name: "Pete" }); // If the copied property name already exists, it gets overwritten

alert(user4.name); // now user4 = { name: "Pete" }