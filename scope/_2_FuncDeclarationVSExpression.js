// function declaration vs function expression
//function declaration 'declaredFunc' will be in eclosing scope
function declaredFunc() {

}
// function expressions - foo declaration is available only in function body -
// better way to reference it for recursion, useful in debugging since it prints the function name 'foo'
var bar = function foo() {
  return 'a';
}

bar();
foo(); //Error