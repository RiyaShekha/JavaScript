function func1(){
    let a = 20;

    if (true){
        // outer x will have scope here also because it this block is inside the outer block in which x is defined
        console.log(a);  // 20
    }
    console.log(a);  //20
}

func1();

function func2(){
    let b = 10;
     
    if (true){
        let b = 50; // it will not give error because is is new scope and outer x will not have scope inside this block now
        console.log(b);  // 50 because in THIS block new x is diffined, so the outer x will not have scope inside this block now
    }
    console.log(b); // 10 because inner x was a diffrent variable and it will not effect outer x
}

func2();