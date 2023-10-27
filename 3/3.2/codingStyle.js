let x = prompt("x?", "");
let n = prompt("n?", "");

alert( pow(x, n) );

function pow(x, n) {
    if (n < 0) {
      alert("Negative 'n' not supported");
      return;
    }
  
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  } 