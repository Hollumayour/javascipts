// let x = 5;

// x = 8;
// alert(x);

// const x = 6;
// x = 5;
// alert(x);

// let x = 40;

// function first() {
//   console.log(x);
// }
// second();
// function second() {
//   console.log(x);
// }

// variables inside same function are local variables
// in function 2 we have y and we tend to use y in function1 it will not work
// any variable declared outside a function has a global scobe

let x = 3;
function function1() {
    let x = 1;
    console.log(x);
  }
// function function2() {
//   let x = 1;
//   console.log(x);
// }
// a global variable is recognized and accessible from anywhere
// if we have 2 variables with same name the local scope will be used first