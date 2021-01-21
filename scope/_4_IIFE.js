//IIFE - Immediately invoked function expression, very famous
// this can be used in a situation where a piece of code need to be called   avoid creating function declaration variable

var foo = "bar";
(function(){
  var foo = "test";
  console.log(foo) //test
})();

console.log(foo) //bar