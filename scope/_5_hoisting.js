/*
Hoisting is way to understand how functions and variables are hoisted.
Functions are hoisted first and then variables
 */

var a = b();
var c = d(); // error since d is declared but not yet initialized j.e RHS is not yet set, so trying to call a function of undefine which gives error

console.log(a);
console.log(c);

function b() {
  return "hello";
}

var d = function() {
  return "d is declared but RHS is not assigned yet";
};

/*
The above code should be seen like below. Functions are hoisted first and then variable declarations
 */

/*
function b() {
  return "hello";
}
var a;
var c;
var d;

a = b();
c = d();

console.log(a);
console.log(c);

d = function() {
  return "d is declared but RHS is not assigned yet";
};

 */