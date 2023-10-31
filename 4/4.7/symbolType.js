"use strict";

//A “symbol” represents a unique identifier.A value of this type can be created using Symbol()
let id = Symbol();
// id is a symbol with the description "id"
let id1 = Symbol("id"); //here are two symbols with the same description – they are not equal
let id2 = Symbol("id");

alert(id1 == id2); // false

/*
//Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
*/
//we need to explicitly call .toString() on it
alert(id1.toString()); // Symbol(id), now it works

alert(id.description); // id

let user = { // belongs to another code
    name: "John"
};
user[id1] = 1;
alert( user[id1] ); // 1 ,we can access the data using the symbol as the key

user[id1] = "Their id value"; //There will be no conflict between our and their identifiers, because symbols are always different, even if they have the same name.

/*
//But if we used a string "id" instead of a symbol for the same purpose, then there would be a conflict:

// Our script uses "id" property
user.id2 = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id2 = "Their id value"
// Boom! overwritten by another script!
*/

let user = {
    name: "John",
    age: 30,
    [id2]: 123
};
  
for (let key in user) alert(key); // name, age (no symbols)
  
// the direct access by the symbol works
alert( "Direct: " + user[id2] ); // Direct: 123

let user2 = {
    [id]: 123
};
  
let clone = Object.assign({}, user2);
alert( clone[id] ); // 123

// read from the global registry
let id3 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id3 === idAgain ); // true

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name