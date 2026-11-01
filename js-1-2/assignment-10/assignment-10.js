let diceNumber = Number(prompt("How many dice should we roll?"));
let desiredSum = Number(prompt("What is the desired sum?"));

let trials = 3000000;
let sumCount = 0;
let diceSum = 0;

for(let i = 0; i < trials; i++) {

    let diceSum = 0;
    for(let x = 0; x < diceNumber; x++) {
    diceSum += Math.floor(Math.random() * 6) + 1;
}

    if(diceSum == desiredSum) {
        sumCount += 1;
    }
    else {
        continue;
    }
}

document.querySelector("#target").innerHTML = "Probability to get sum " + desiredSum + " with " + diceNumber + " dice is " + (sumCount / trials * 100).toFixed(2) + "%";