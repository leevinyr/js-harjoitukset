let number1 = prompt("Give number 1:");
let number2 = prompt("Give number 2:");
let number3 = prompt("Give number 3:");
let number4 = prompt("Give number 4:");
let number5 = prompt("Give number 5:");

const numbers = [number1, number2, number3, number4, number5];

for(let i = numbers.length; i > -1; i--) {
    console.log(numbers[i]);
}