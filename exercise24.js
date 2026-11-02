// exercise 24 JS

// Create a function calculateArea that takes width and height as parameters and returns the area. If no height is provided, it should default to width (for calculating the area of a square).


const calculateArea = (width, height = width) => width * height;

console.log(calculateArea(7));