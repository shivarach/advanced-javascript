/*
'new' keyword is not like other OO language class objects
'new' can be used for any function

The following happens when new keyword is used for function
1) Brand new empty object is created
2) object gets linked to different object
3) object gets bound as this
4) object would be returned to us as this

 */

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);