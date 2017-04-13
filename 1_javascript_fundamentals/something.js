//alert('Hello World');

var firstName = 'Jeff';
var lastName = 'Doe';

//alert('Hi my name is ' + firstName + ' ' + lastName);

//MARK: conditional statements
if (firstName == 'John') {
  alert('yes, I am John');
} else {
  //alert("nope, I'm not John")
  alert('nope, I\'m not John')
}

//MARK: Arrays
var cars = new Array();
cars[0] = 'Toyota';
cars[1] = 'Honda';
cars[2] = 'Mitsubishi';
cars[3] = 'Lexus';

//or... cars = ['Toyota', 'Honda', 'Mitsubishi', 'Lexus'];

alert(cars[1]);

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

function sayIt(string) {
  console.log(string);
}

sayIt('This is my input parameter');

function addAToB(A, B) {
  var result = A + B;
  alert(result);
}

addAToB(3, 4);