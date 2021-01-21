/*
The ability of a function to remember its lexical scope even when it is executed outside its lexical scope.

It lets us pass functions as parameters to other with lexical scope
 */


function foo() {
  var bar = "bar";
  function baz() {
    console.log(bar);
  }
  bam(baz);
}

function bam(baz) {
  baz() // bar
}

foo();