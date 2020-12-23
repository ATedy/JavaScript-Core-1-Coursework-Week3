// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiply(number){
  return number * 100;
}

// Sol 1

let multipliedNumbers = numbers.map(multiply);
// console.log(multipliedNumbers);

// --- Sol 2

multipliedNumbers = numbers.map(function multiply(number){
  return number * 100;
});

// --Sol 3

multipliedNumbers = numbers.map( function (number){
  return number * 100;
});

// Sol-4

multipliedNumbers = numbers.map(number => { 
  return number * 100
 
});

// Sol-5, implicit return

multipliedNumbers = numbers.map(number =>  number * 100);


// console.log(multipliedNumbers);


