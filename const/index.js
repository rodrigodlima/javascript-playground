//A variable defined with the const keyword cannot be reassigned:

const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error


// JavaScript const variables must be assigned a value when they are declared:

// Correct:
const PI = 3.14159265359;

// Incorrect:
const PI;
PI = 3.14159265359;