"use strict";

//If the method Symbol.toPrimitive exists, it’s used for all hints, and no more methods are needed.
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
  
// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

//here user does the same as above using a combination of toString and valueOf instead of Symbol.toPrimitive
let user2 = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
};
  
alert(user2); // toString -> {name: "John"}
alert(+user2); // valueOf -> 1000
alert(user2 + 500); // valueOf -> 1500

//In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.
let user3 = {
    name: "John",
  
    toString() {
      return this.name;
    }
};
alert(user3); // toString -> John
alert(user3 + 500); // toString -> John500

let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
};
alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

let obj2 = {
    toString() {
      return "2";
    }
};
alert(obj2 + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation
