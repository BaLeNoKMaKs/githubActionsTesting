
const Calculator = require('./calc');
const calc = new Calculator();

console.log("1 + 2 is " + calc.add(1, 2));
console.log("3 - 5 is " + calc.sub(3, 5));
console.log("3 * 5 is " + calc.mul(3, 5));
console.log("5 / 2 is " + calc.div(5, 2));
console.log("log10 is " + calc.log(10));
console.log("sin 360 is " + calc.sin(360));
console.log("tan 180 is " + calc.tan(180));
console.log("cos 120 is " + calc.cos(120));
console.log("5! is " + calc.fact(5));