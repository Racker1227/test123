// 0.1 - 0.4 = floor
// 0.4 - 0.9 = ceil
// 0.5 = round (math.round)



num =78;

let num1 = num % 10;

let num2 = Math.floor(num/10);

let num3= num1 + num2;


console.log(num1);
console.log(num2);
console.log(num3);