"use strict";

// we will use mocha for automated testing
// and chai for diffrence asserts like assert.eaqual

const chai = require('chai');

// making the chai assert global
let assert = chai.assert;

/**
 * 
 * @param {number} x 
 * @param {number} n 
 * @returns {number} x raised to n
 */
function pow(x, n){
    
    if (n < 0) return NaN;
    if (parseInt(n) !== n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

// generally test cases for mocha are written in a different file
describe("raised to power three", () => {
  function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
  }
  
  for (let x = 1; x <= 5; x++) {
      makeTest(x);
  } 
})

describe("pow", function() {

  describe("raises x to power 3", function() { //nested description

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });
});