const kelvin = 300;

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);