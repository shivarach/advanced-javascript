/*
Only Kyle's choice, not JS community way of working
 */
var Foo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return "I am " + this.me;
  }
};

var Bar = Object.create(Foo);

Bar.speak = function () {
  console.log("Hello, " + this.identify() + ".");
};

var b1 = Object.creat(Bar);
b1.init("b1");
b1.speak();