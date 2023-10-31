"use strict";

// user has a reference to the object
let user = {
    name: "John"
};
user = null; //Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

// user has a reference to the object
let user2 = {
    name: "John"
};
  
let admin = user2;
user2 = null; //Then the object is still reachable via admin global variable, so it must stay in memory. If we overwrite admin too, then it can be removed.

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
}
let family = marry({
    name: "John"
  }, {
    name: "Ann"
});

delete family.father;
delete family.mother.husband; //John is now unreachable and will be removed from the memory 

//family = null; //The former "family" object has been unlinked from the root, there’s no reference to it any more, so the whole island becomes unreachable and will be removed.
  