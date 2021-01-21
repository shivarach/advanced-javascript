/*
'this' can be understood by four rules

1) Default binding(Global)
2) Implicit binding (Objects)
3) Explicit binding (first parameter passed in call/bind)
4) Hard binding
 */

/*
Refer following order to figure out this
1) Was the function called with 'new' - then use that object
2) Was the function called with 'call' or 'apply' specifying an explicit 'this'? - then use that object as this
3) Was the function called via a containing/owning object (context)? - then use that object as this
4) DEFAULT: global object (except strict mode)
 */

function foo() {
  console.log(this.bar);
}

var bar = "bar1 - global bar value";
var o2 = {bar: "bar2 - objects bar value", foo: foo} // foo is implicitly binded here

console.log(foo()); // Default binding
o2.foo(); // implicit binding

//explicit binding
var obj = {bar: "bar3 - explicit binding"};
foo.call(obj); // explicit binding - first parameter 'obj' is considered as this

// hard binding
/*
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given
sequence of arguments preceding any provided when the new function is called.
 */
var obj1 = {bar: "bar4 - hard binding"};
var bindedFunc = foo.bind(obj1);
bindedFunc();