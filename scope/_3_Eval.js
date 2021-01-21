// Never use 'eval', it disturbs the lexical scope so js engine has to skip some optimizations to serve eval. 'with' is also same, avoid it
var bar = "bar";

function foo(str) {
  eval(str);
  console.log(bar); // 42
}

foo("var bar = 42;")