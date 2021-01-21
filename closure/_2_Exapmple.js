// below prints 6 for 5 times because on each iteration setTimeout has same scope
for(var i=1; i<=5; i++) {
  setTimeout(function() {
    console.log("j: " + i);
  }, i*1000)
}

//below one prints 1,2,3,4,5
// Use IIFE to print correctly, which get its own scope
for(var j=1; j<=5; j++) {
  // IIFE gets their own scope
  (function(i) {
    setTimeout(function() {
      console.log("j: " + i)
    }, i*1000)
  })(j)
}

// 'let' magically simplifies even further
for(let i=1; i<=5; i++) {
  setTimeout(function() {
    console.log("i: " + i);
  }, i*1000)
}
