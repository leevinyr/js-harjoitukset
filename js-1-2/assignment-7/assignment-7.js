let count = prompt("How many dice should we roll?");
let sum = 0;

let i = 0;
while(i < count) {
    sum += Math.floor(Math.random() * 6) + 1;
    i++;
}

console.log(sum);