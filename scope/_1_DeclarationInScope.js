/*
Functions are the primary units for scope in javascript
LHS - declaration of variable in a scope
RHS - assignment to a already declared variable
*/

var foo = "bar"

function bar() {
  var foo = "baz";
  function baz(foo) {
    foo = "bam";
    // LHS will be fulfilled/decalared like this - bam declaration would be looked up on upper scope, if not found declared in global scope
    bam = "yay";
  }
  baz();
}

console.log(bar()); // undefined
console.log(foo); // bar
console.log(bam); // yay
// RHS won't be fulfilled/declared automatically unlike LHS
console.log(baz()); // Uncaught reference baz is not definted