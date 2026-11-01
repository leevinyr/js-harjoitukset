let int1 = prompt("Give the first number:");
let int2 = prompt("Give the second number:");
let int3 = prompt("Give the third number:");

let sum = parseInt(int1) + parseInt(int2) + parseInt(int3);
let product = parseInt(int1) * parseInt(int2) * parseInt(int3); 
let avg = (parseInt(int1) + parseInt(int2) + parseInt(int3)) / 3;

document.querySelector('#target').innerHTML = "Sum: " + parseInt(sum) + " Product: " + parseInt(product) + " Average: " + parseFloat(avg);