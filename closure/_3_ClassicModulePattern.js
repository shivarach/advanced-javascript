/*
This way, modules can be built which neatly encapsulate data.
characteristics:
  1) outer wrapping function
  2) returning an inner function (IIFE)
ES6 export/import is better way of writing modules. check _4_modules.js
 */
var foo = function() {
  var o = {bar: "bar"};
  return {
    bar: function() {
      console.log(o.bar);
    }
  }
}();

foo.bar();