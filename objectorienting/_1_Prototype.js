/*
Look at PrototypeObjectLinks.png to understand this.

See ObjectLinked.js for Kyle's recommendation which works same as below
 */
function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  console.log( "Hello, " + this.identify() + ".");
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();


// how to refer prototype object of any object?
var a1 = new Foo("a1");
var a2 = new Foo("a2");

console.log(Object.getPrototypeOf(a1));
console.log(a1.__proto__);
console.log(a1.constructor.prototype)

//how to refer constructor
console.log(a2.constructor = Foo) //true
