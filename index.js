//1. Function and scope:
// Global scope variable
const globalVar = "I'm global";

function exampleFunction() {
    // Local scope variable
    const localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

exampleFunction();
console.log(globalVar); // Accessible
//console.log(localVar);  // Not accessible (will result in an error)

//2. Intro to "this" Context:
const person = {
    firstName: 'Duaa',
    lastName: 'Zyd',
    fullName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

person.fullName(); // Output: Duaa Zyd

//3. Arrays and loops:
const numbers = [1, 2, 3, 4, 5];

// Using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using a for...of loop
for (const number of numbers) {
    console.log(number);
}

//4. Object Literals
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2023,
    start: function() {
        console.log('Engine started');
    }
};

console.log(car.make); // Output: Toyota
car.start();           // Output: Engine started

//5. Basic Data Types:
const num = 42;                // Number
const message = "Hello, JS";   // String
const isTrue = true;           // Boolean
let emptyVar;                  // Undefined
const noValue = null;          // Null
const sym = Symbol('unique');  // Symbol