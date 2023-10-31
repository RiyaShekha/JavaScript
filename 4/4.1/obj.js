"use strict";

// objects are like cabinate with properties in them (key-value pairs)

//An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

//We can immediately put some properties into {...} as “key: value” pairs:

let user3 = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// get property values of the object:
alert( user3.name ); // John
alert( user3.age ); // 30

user3.isAdmin = true; //The value can be of any type. Let’s add a boolean one

delete user3.age; //To remove a property, we can use the delete operator

let user4 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

//user.likes birds = true; // this would give a syntax error

//There’s an alternative “square bracket notation” that works with any string:
let user5 = {};

// set
user5["likes birds"] = true;

// get
alert(user5["likes birds"]); // true

// delete
delete user5["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user3[key] = true;

//The last property in the list may end with a comma:
let user = {
  name: "John",
  age: 30, //That is called a “trailing” or “hanging” comma.
}

let key1 = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key1] ); // John (if enter "name")

key = "name";
alert( user.key ) // undefined ,The dot notation cannot be used in a similar way

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }

  let obj = makeUser(Riya, 20);

// these properties are all right
let obj2 = {
    for: 1,   //there’s no such restriction of the language-reserved words like “for”, “let”, “return” etc.
    let: 2,
    return: 3
  };
  
  alert( obj.for + obj.let + obj.return );  // 6

  let obj3 = {
    0: "test" // same as "0": "test"
  };
  
  // both alerts access the same property (the number 0 is converted to string "0")
  alert( obj3["0"] ); // test
  alert( obj3[0] ); // test (same property)

  alert( user.noSuchProperty === undefined ); // true means "no such property"

  //There’s also a special operator "in"
  alert( "age" in user ); // true, user.age exists
  alert( "blabla" in user ); // false, user.blabla doesn't exist

  let key4 = "age";
alert( key4 in user ); // true, property "age" exists

let obj4 = {
    test: undefined
  };
  
  alert( obj4.test ); // it's undefined, so - no such property?
  
  alert( "test" in obj4 ); // true, the property does exist!

  for (let key in user) {
    // keys
    alert( key );  // name, age
    // values for the keys
    alert( user[key] ); // John, 30
  }